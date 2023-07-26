import React from 'react'
import Layout from '../Layouts/Layout'
import TopHeading from '../Home/Common/TopHeading'
import H2heading from '../Home/Common/H2heading'
import { useForm } from '@mantine/form'
import './contact.css'
import { Checkbox, TextInput, Textarea } from '@mantine/core'
import MantineTextInput from '../Common/FormInputs/CustomTextInput/CustomTextInput'
import CustomTextArea from '../Common/FormInputs/CustomTextArea/CustomTextArea'
import CustomCheckbox from '../Common/FormInputs/CustomCheckbox'
import CustomButton from '../Common/CustomButton'

export default function GetInTouch() {
  const form = useForm({
    initialValues: {
      email: '',
      termsOfService: false,
    },
  })

  return (
    <Layout className="py-20">
      <div className="contact_form relative bg-[url('/contact/reservation-1-bg.png')] w-full bg-no-repeat bg-cover rounded-lg p-20">
        <div className="flex flex-col items-center justify-center z-20">
          <TopHeading text="Contact Us" />
          <H2heading color="white" text="Get In Touch" />
        </div>
        <div className="flex flex-col items-center justify-center">
          <form
            onSubmit={form.onSubmit((values) => console.log(values))}
            className="w-full px-16 mt-16 flex flex-col gap-8"
          >
            <div className="flex gap-4 relative">
              <MantineTextInput
                formProps={{ ...form.getInputProps('email') }}
                placeholder="Email"
                className="w-full"
              />
              <MantineTextInput
                formProps={{ ...form.getInputProps('email') }}
                placeholder="Name"
                className="w-full"
              />
            </div>
            <CustomTextArea
              placeholder="Message ..."
              maxRows={10}
              minRows={8}
            />
            <CustomCheckbox label="Please save my name, email for the next time when I comment." />
            <div className="flex items-center justify-center mt-10">
              <CustomButton
                name="send message"
                text="Send Message"
                withIcon={false}
                size="lg"
                className="w-full bg-primary text-white max-w-sm z-20 rounded-tr-none rounded-tl-2xl rounded-br-2xl rounded-bl-none hover:bg-white hover:text-primary hover:border-none transition-all"
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
