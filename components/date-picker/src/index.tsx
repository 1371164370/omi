import { tag, WeElement, h, classNames } from 'omi'
import flatpickr from 'flatpickr'
import { DateLimit, DateOption, Hook, Options, ParsedOptions } from 'flatpickr/dist/types/options'
import { CustomLocale } from 'flatpickr/dist/types/locale'
import StyleLoader, { FlatpickrTheme } from './style.ts';
import { Locale } from 'flatpickr/dist/types/locale'

import '@omiu/icon/esm/date-range'

import { Mandarin } from "flatpickr/dist/esm/l10n/zh"

import '@omiu/input'

interface Props {
  size?: 'medium' | 'small' | 'mini'
  width?: string
  locale?: string
  placeholder?: string
  altFormat?: string
  altInput?: boolean
  altInputClass?: string
  allowInput?: boolean
  ariaDateFormat?: string
  clickOpens?: boolean
  dateFormat?: string
  defaultDate?: object
  defaultHour?: number
  defaultMinute?: number
  disable?: any[]
  disableMobile?: boolean
  enable?: any[]
  enableTime?: boolean
  enableSeconds?: boolean
  formatDateFn?: (date: Date, format: string, locale: Locale) => string;
  hourIncrement?: number
  minuteIncrement?: number
  inline?: boolean
  maxDate?: string
  minDate?: string
  mode?: string
  nextArrow?: string
  prevArrow?: string
  noCalendar?: boolean
  onChange?: Hook

  onClose?: Hook
  onOpen?: Hook
  onReady?: Hook
  onMonthChange?: Hook
  onYearChange?: Hook
  onValueUpdate?: Hook
  parseDateFn?: (date: string, format: string) => Date;
  position?: string
  shorthandCurrentMonth?: boolean
  showMonths?: number
  static?: boolean
  time_24hr?: boolean
  weekNumbers?: boolean
  wrap?: boolean
  theme?: string,

}

@tag('o-date-picker')
export default class Popover extends WeElement<Props> {

  static defaultProps = {
    theme: 'light',
    size: 'small',
    width: 'auto'
  }

  static propTypes = {
    theme: String,
    size: String,
    width: String
  }

  onEnter = (evt) => {

    clearTimeout(this.timeout)
    this.isShow = !this.isShow
    this.update()


    evt.stopPropagation()
  }

  timeout

  onLeave = () => {
    this.timeout = setTimeout(() => {
      this.isShow = false
      this.update()
    }, 600)

  }

  onEnterPopover = (evt) => {
    clearTimeout(this.timeout)
    evt.stopPropagation()
  }

  onLeavePopover = () => {
    if (this.props.trigger !== 'click') {
      this.timeout = setTimeout(() => {
        this.isShow = false
        this.update()
      }, 600)
    }

  }

  updated() {
    const { locale, ...other } = this.props
    flatpickr(this.shadowRoot.querySelector('o-input'), {
      locale: locale === 'zh' ? Mandarin : null,
      ...other
    })
  }

  async installed(): Promise<void> {
    const styleLoader = new StyleLoader(this.props.theme as FlatpickrTheme)
    await styleLoader.initStyles()
    const { locale, ...other } = this.props

    flatpickr(this.shadowRoot.querySelector('o-input'), {
      locale: locale === 'zh' ? Mandarin : null,
      ...other
    })
  }

  isShow = false

  render(props) {
    return <div>
      <o-input size={props.size} suffix-icon="date-range" css={`.o-input input {
    width: ${props.width};
}`} type="text" />
    </div>
  }
}
