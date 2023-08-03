import CustomButton from '@/components/Common/CustomButton'
import CustomTextArea from '@/components/Common/FormInputs/CustomTextArea/CustomTextArea'
import MantineTextInput from '@/components/Common/FormInputs/CustomTextInput/CustomTextInput'
import { Rating } from '@mantine/core'
import { useForm } from '@mantine/form'
import React, { useState } from 'react'

export default function MakeReplay() {
  const [rating, setRating] = useState(0)
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      comment: '',
      ratings: 0,
    },
  })

  const onSubmit = (values: any) => {
    //******** set rating before submit
    values.ratings = rating

    console.log(values)
    console.log('rating', rating)
  }

  return (
    <div className="border-2 border-secondary/10 rounded-lg p-12">
      <h4 className="text-2xl ">Leave A Comment</h4>
      <form
        onSubmit={form.onSubmit((values) => onSubmit(values))}
        className="flex flex-col gap-4 mt-8"
      >
        <div className="flex flex-col md:flex-row gap-4 relative">
          <MantineTextInput
            formProps={{ ...form.getInputProps('name') }}
            placeholder="Name"
            size="lg"
            className="w-full bg-primary/5 rounded-lg"
          />
          <MantineTextInput
            formProps={{ ...form.getInputProps('email') }}
            placeholder="Email"
            size="lg"
            className="w-full bg-primary/5 rounded-lg"
          />
        </div>
        <CustomTextArea
          placeholder="Message ..."
          maxRows={10}
          minRows={8}
          className="bg-primary/5 rounded-lg"
        />
        <div className="flex flex-col">
          <p className=" text-secondary/80">Your Rating</p>
          <Rating value={rating} onChange={setRating} />
        </div>
        <div className="">
          <CustomButton
            formProps={{ ...form.getInputProps('rating') }}
            type="submit"
            name="comment_button"
            text="Post Comment"
            withIcon={false}
            size="lg"
            className="bg-primary text-white rounded-tl-xl rounded-tr-none rounded-bl-none rounded-br-xl inline-block mt-6"
          />
        </div>
      </form>
    </div>
  )
}
