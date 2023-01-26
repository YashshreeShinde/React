// import React from 'react'
// import DateView from 'react-datepicker'
// import { Field, ErrorMessage } from 'formik'
// import TextError from './TextError'
// import 'react-datepicker/dist/react-datepicker.css'
// import styles from "./Fields.module.scss"

// function DatePicker (props:any) {
//   const { label, name, ...rest } = props
//   return (
//     <div className={styles["form-control"]}>
//       <label htmlFor={name} className={styles["label"]}>{label}</label>
//       <Field name={name} className={styles["form-control"]}>
//         {({ form, field }:any) => {
//           const { setFieldValue } = form
//           const { value } = field
//           return (
//             <DateView
//               id={name}
//               {...field}
//               {...rest}
//               selected={value}
//               onChange={(val:any) => setFieldValue(name, val)}
//               // className={styles["form-control"]}
//             />
//           )
//         }}
//       </Field>
//       <ErrorMessage component={TextError} name={name} />
//     </div>
//   )
// }

// export default DatePicker
export const a={}