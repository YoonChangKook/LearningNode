const local = require('./localStrategy')
const kakao = require('./kakaoStrategy')
//const naver = require('./naverStrategy')
const { User } = require('../models')

module.exports = passport => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } })
      done(null, user)
    } catch (err) {
      done(err)
    }
  })

  local(passport)
  kakao(passport)
  //naver(passport)
}
