import { Button } from '@/shared/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/shared/ui/form';
import { Input } from '@/shared/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select';

import { useAddBlockItemForm } from '../model/use-add-block-item-form';

export function AddBlockItemForm() {
  const { form, functions, type } = useAddBlockItemForm();

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={functions.handleSubmit}>
          <div className="flex gap-2 items-center">
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="grid gap-1 w-[250px] max-w-full">
                  <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a block type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Website">WebSite</SelectItem>
                        <SelectItem value="KeyWord">KeyWord</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="data"
              render={({ field }) => (
                <FormItem className="grid gap-1 w-[250px] max-w-full">
                  <FormControl>
                    <Input
                      id="data"
                      placeholder={
                        type
                          ? type === 'Website'
                            ? 'please enter a website domain'
                            : 'please enter a keyword'
                          : ''
                      }
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="mt-1" type="submit">
              Add
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
