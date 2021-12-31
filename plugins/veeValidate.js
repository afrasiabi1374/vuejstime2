//  ما به این قوانین در سرتاسر پروژه مون دسترسی داریم
import { extend } from 'vee-validate'
import { required, min, email } from 'vee-validate/dist/rules'

extend('required', required)
extend('min', min)
extend('email', email)