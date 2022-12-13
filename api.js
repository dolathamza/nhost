import { NhostClient } from '@nhost/nhost-js'

const nhost = new NhostClient({
  subdomain: '<Your Nhost project subdomain>',
  region: '<Your Nhost project region>'
})

export default nhost