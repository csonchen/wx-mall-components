const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Component({
  properties: {
    show: {
      type: Boolean,
      value: false,
    },
  },

  data: {
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    value: [9999, 1, 1],
    begin: '',
    end: '',
    active: '',
  },

  attached() {

  },

  methods: {
    show() {
      this.setData({ show: true })
    },

    hide() {
      this.setData({ show: false })
    },

    confirm() {
      this.hide()
      this.triggerEvent('')
    },

    handleActive(e) {
      const { active } = e.target.dataset
      this.setData({ active })
    },

    bindChange(e) {
      const val = e.detail.value
      const currentYear = this.data.years[val[0]],
            currentMonth = this.data.months[val[1]],
            currentDay = this.data.days[val[2]],
            date = new Date(currentYear, currentMonth, 0),
            currentDays = date.getDate(),
            days = []

      for (let i = 1; i <= currentDays; i++) {
        days.push(i)
      }

      const currentDate = this.getDate(currentYear, +currentMonth, +currentDay)
      const begin = this.data.active === 'begin' ? currentDate : this.data.begin
      const end = this.data.active === 'end' ? currentDate : this.data.end
      this.setData({
        days,
        begin,
        end,
      })
    },

    getDate(year, month, day) {
      return `${year} : ${month < 10 ? `0${month}` : month} : ${day < 10 ? `0${day}` : day}`
    }
  }
})