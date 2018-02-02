const createBottomlessObj = (path = []) =>
  new Proxy({ type: 'Bottomless', path }, {
    get (target, name) {
      return createBottomlessObj([...path, name.toString()])
    }
  })

module.exports = () => createBottomlessObj()
