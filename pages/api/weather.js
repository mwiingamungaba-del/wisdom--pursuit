export default function handler(req, res) {
  res.status(410).json({ error: 'Deprecated: Weather API removed. This prototype focuses on Gondar Day School Science Learning Platform.' })
}
