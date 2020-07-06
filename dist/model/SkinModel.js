const SkinModel = function() {
  let mainColor = '#0188ff'
  let subColor = '#323232'

  const setSkin = ({ main, sub }) => {
    mainColor = main || mainColor
    subColor = sub || subColor
    return this
  }

  const getSkin = () => {
    return {
      main: mainColor,
      sub: subColor,
    }
  }

  return {
    setSkin,
    getSkin,
  }
}

const skinModel = new SkinModel()
module.exports = skinModel