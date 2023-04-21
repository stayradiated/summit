import type { Hill } from '@prisma/client'

import baystones from '~/image/baystones.png'
import castleCrag from '~/image/castle_crag.png'
import catBells from '~/image/cat_bells.png'
import doveCrag from '~/image/dove_crag.png'
import fairfield from '~/image/fairfield.png'
import greatRigg from '~/image/great_rigg.png'
import harrisonStickle from '~/image/harrison_stickle.png'
import hartCrag from '~/image/hart_crag.png'
import heronPike from '~/image/heron_pike.png'
import highPikeScandale from '~/image/high_pike_scandale.png'
import highSpy from '~/image/high_spy.png'
import latrigg from '~/image/latrigg.png'
import maidenMoor from '~/image/maiden_moor.png'
import oldManOfConiston from '~/image/the_old_man_of_coniston.png'
import paveyArk from '~/image/pavey_ark.png'
import loughrigg from '~/image/loughrigg.png'
import blackFell from '~/image/black_fell.png'
import dowCrag from '~/image/dow_crag.png'
import pikeOfStickle from '~/image/pike_of_stickle.png'
import wetherlam from '~/image/wetherlam.png'
import silverHow from '~/image/silver_how.png'
import holmeFell from '~/image/holme_fell.png'
import nabScar from '~/image/nab_scar.png'
import brimFell from '~/image/brim_fell.png'
import swirlHow from '~/image/swirl_how.png'
import lowPike from '~/image/low_pike.png'

const images = {
  2352: latrigg,
  2406: harrisonStickle,
  2417: pikeOfStickle,
  2423: paveyArk,
  2436: highSpy,
  2461: maidenMoor,
  2490: catBells,
  2499: silverHow,
  2507: loughrigg,
  2508: blackFell,
  2510: castleCrag,
  2521: fairfield,
  2529: hartCrag,
  2533: doveCrag,
  2539: greatRigg,
  2562: highPikeScandale,
  2573: heronPike,
  2607: baystones,
  2611: nabScar,
  2634: oldManOfConiston,
  2636: brimFell,
  2638: dowCrag,
  2640: wetherlam,
  2673: holmeFell,
  2635: swirlHow,
  2596: lowPike,
}

type BadgeListProps = {
  hillList: Hill[]
  baggedHillIds: number[]
}

const BadgeList = (props: BadgeListProps) => {
  const { hillList, baggedHillIds } = props

return (
  <section>
    <h3>Badges</h3>
    <ul className='badge-list'>
      {hillList.filter((hill) => {
        return baggedHillIds.includes(hill.id)
      }).map((hill) => {
      const { remoteId } = hill
        return (
          <li key={hill.id} className='badge-list-item'>
            <h4>{hill.name}</h4>
            {(remoteId in images) && <img src={images[remoteId]} />}
          </li>
        )
      })}
    </ul>
  </section>
)
}

export { BadgeList }
