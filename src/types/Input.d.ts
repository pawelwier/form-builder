enum InputType {
  text,
  number,
  singleChoice
  /*
    TODO:
    - multiChoice
    - postcode ??
    - phoneNumber ??
  */
}

export interface Input {
  name: string
  header: string
  type: InputType
  placeholder?: string
  data?: string // JSON parse-able
  /*
    TODO: more
  */
}