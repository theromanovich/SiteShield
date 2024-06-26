import {
  BlockItemDtoType,
  accountControllerGetAccount,
  blockListControllerGetList,
} from '@/shared/api/generated';
import { ADMIN_URL } from '@/shared/constants';
import { NetRule, NetRuleActionType, NetRuleResourceType } from '@/shared/lib/browser';

export async function getBlockListNetRules() {
  const blockList = await blockListControllerGetList();

  const allowFromBlockListOnly = await accountControllerGetAccount().then(
    (r) => r.allowFromBlockListOnly,
  );

  const domainRules = blockList.items
    .filter((item) => item.type === BlockItemDtoType.Website)
    .map(
      (item): NetRule => ({
        id: item.id,
        action: {
          type: allowFromBlockListOnly ? NetRuleActionType.ALLOW : NetRuleActionType.BLOCK,
        },
        condition: item.data.startsWith('regexp:')
          ? {
              regexFilter: item.data.replace('regexp:', ''),
              resourceTypes: [NetRuleResourceType.MAIN_FRAME],
            }
          : {
              urlFilter: item.data,
              resourceTypes: [NetRuleResourceType.MAIN_FRAME],
            },
      }),
    );

  const defaultBlockRule = {
    id: domainRules.length + 1,
    action: {
      type: NetRuleActionType.BLOCK,
    },
    condition: {
      urlFilter: '*',
      resourceTypes: [NetRuleResourceType.MAIN_FRAME],
    },
  };

  const allowAdminPanelRule = {
    id: domainRules.length + 2,
    action: {
      type: NetRuleActionType.ALLOW,
    },
    condition: {
      urlFilter: ADMIN_URL,
      resourceTypes: [NetRuleResourceType.MAIN_FRAME],
    },
  };

  const allRules = [allowAdminPanelRule, ...domainRules];

  if (allowFromBlockListOnly) {
    allRules.push(defaultBlockRule as NetRule);
  }

  const keywords = blockList.items
    .filter((item) => item.type === BlockItemDtoType.KeyWord)
    .map((item) => item.data.trim().toLowerCase());

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id ? tabs[0].id : 0, {
      action: 'blockList',
      domainRules,
      keywords,
    });
  });

  return allRules;
}
