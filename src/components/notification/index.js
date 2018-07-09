import Notification from './notification'
import notif from './function'

export default (Vue) => {
  Vue.component(Notification.name, Notification)
  Vue.prototype.$notif = notif
}
