import { locales } from '@/locales'

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof locales.ko.messages
    }
  }
}
