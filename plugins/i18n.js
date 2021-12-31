import { configure } from 'vee-validate'

export default function ({ app }) {
    configure({
        defaultMessage: (field, values) => {
            /// t is translate method
            values._field_ = app.i18n.t( `${field}`)
            return app.i18n.t(`validation.${values._rule_}`, values)
        }
    })
}