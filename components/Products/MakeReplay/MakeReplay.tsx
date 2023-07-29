import CustomTextArea from '@/components/Common/FormInputs/CustomTextArea/CustomTextArea'
import MantineTextInput from '@/components/Common/FormInputs/CustomTextInput/CustomTextInput'
import { useForm } from '@mantine/form'
import React from 'react'

export default function MakeReplay() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      comment: '',
    },
  })

  return (
    <div className="border-2 border-secondary/10 rounded-lg p-12">
      <h4 className="text-2xl ">Leave A Comment</h4>
      <form
        onSubmit={form.onSubmit((values) => console.log(values))}
        className=""
      >
        <div className="flex gap-4 relative">
          <MantineTextInput
            formProps={{ ...form.getInputProps('name') }}
            placeholder="Name"
            className="w-full"
          />
          <MantineTextInput
            formProps={{ ...form.getInputProps('email') }}
            placeholder="Name"
            className="w-full"
          />
        </div>
        <CustomTextArea placeholder="Message ..." maxRows={10} minRows={8} />
      </form>
    </div>
  )
}
