'use client'
import React from 'react'
import { FadeIn } from './FadeIn'
import { useId } from 'react'

import { Button } from '@/components/Button'

export default function ContactForm() {
  function TextInput({
    label,
    ...props
  }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
    let id = useId()

    return (
      <div className="group relative z-0 transition-all focus-within:z-10">
        <input
          type="text"
          id={id}
          {...props}
          placeholder=" "
          className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
        />
        <label
          htmlFor={id}
          className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
        >
          {label}
        </label>
      </div>
    )
  }

  function RadioInput({
    label,
    ...props
  }: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
    return (
      <label className="flex gap-x-3">
        <input
          type="radio"
          {...props}
          className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
        />
        <span className="text-base/6 text-neutral-950">{label}</span>
      </label>
    )
  }

  return (
    <FadeIn className="lg:order-last">
      <form
        id="form"
        onSubmit={async (e) => {
          e.preventDefault()
          const form = document.getElementById('form')
          const submitter = document.querySelector('button[value=save]')
          const formData = new FormData(form as any, submitter as any)

          const name = formData.get('name')
          const email = formData.get('email')
          const company = formData.get('company')
          const phone = formData.get('phone')
          const message = formData.get('message')
          const budget = formData.get('budget')?.valueOf()

          const emailMessage = `Name: ${name}\n Email: ${email}\n Company: ${company}\n Phone number: ${phone}\n Message: ${message}\n Budget: ${budget}`

          console.log(emailMessage)

          const res = await fetch('/api/emailer', {
            method: 'POST',
            body: JSON.stringify(emailMessage),
          })
        }}
      >
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
                <RadioInput label="$25K – $50K" name="budget" value="25" />
                <RadioInput label="$50K – $100K" name="budget" value="50" />
                <RadioInput label="$100K – $150K" name="budget" value="100" />
                <RadioInput label="More than $150K" name="budget" value="150" />
              </div>
            </fieldset>
          </div>
        </div>
        <Button value="save" type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  )
}
