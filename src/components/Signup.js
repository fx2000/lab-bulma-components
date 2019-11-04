import React from 'react';
import CoolButton from "./CoolButton";
import FormField from "./FormField";

export default function Signup() {
  return (
    <div>
      <form action="#" method="POST">
        <FormField label="Name" type="text" placeholder="e.g. Alex Smith" />
        <FormField label="Email" type="email" placeholder="e.g. alex@smith.com" />
        <FormField label="Password" type="password" placeholder="********" />
        <CoolButton isSuccess isRounded type="submit">Signup</CoolButton>
      </form>
    </div>
  )
}
