import prisma from '../../lib/prisma'
import { validateRoute } from '../../lib/auth'

export default validateRoute(async (req, res, user) => {
  const playlistsCount = await prisma.playlist.count({
    // where: {
    //   userId: user.id
    // }
  })
  console.log(playlistsCount)
  res.json({ ...user, playlistsCount })
})