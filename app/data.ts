import type { Point } from '~/turf.server'

type WainwrightSource = {
  href: string,
  name: string,
}

const wainwrightSourceList: WainwrightSource[] = [
  {href:"https://www.walklakes.co.uk/hill_2351.html",name:"Binsey"},
  {href:"https://www.walklakes.co.uk/hill_2350.html",name:"Longlands Fell"},
  {href:"https://www.walklakes.co.uk/hill_2344.html",name:"Brae Fell"},
  {href:"https://www.walklakes.co.uk/hill_2337.html",name:"High Pike (Caldbeck)"},
  {href:"https://www.walklakes.co.uk/hill_2338.html",name:"Great Sca Fell"},
  {href:"https://www.walklakes.co.uk/hill_2346.html",name:"Meal Fell"},
  {href:"https://www.walklakes.co.uk/hill_2336.html",name:"Carrock Fell"},
  {href:"https://www.walklakes.co.uk/hill_2347.html",name:"Great Cockup"},
  {href:"https://www.walklakes.co.uk/hill_2328.html",name:"Knott"},
  {href:"https://www.walklakes.co.uk/hill_2331.html",name:"Great Calva"},
  {href:"https://www.walklakes.co.uk/hill_2333.html",name:"Bakestall"},
  {href:"https://www.walklakes.co.uk/hill_2329.html",name:"Bowscale Fell"},
  {href:"https://www.walklakes.co.uk/hill_2503.html",name:"Sale Fell"},
  {href:"https://www.walklakes.co.uk/hill_2348.html",name:"Souther Fell"},
  {href:"https://www.walklakes.co.uk/hill_2340.html",name:"Mungrisdale Common"},
  {href:"https://www.walklakes.co.uk/hill_2332.html",name:"Bannerdale Crags"},
  {href:"https://www.walklakes.co.uk/hill_2319.html",name:"Skiddaw"},
  {href:"https://www.walklakes.co.uk/hill_2330.html",name:"Ullock Pike"},
  {href:"https://www.walklakes.co.uk/hill_2326.html",name:"Long Side"},
  {href:"https://www.walklakes.co.uk/hill_2501.html",name:"Ling Fell"},
  {href:"https://www.walklakes.co.uk/hill_2325.html",name:"Carl Side"},
  {href:"https://www.walklakes.co.uk/hill_2320.html",name:"Blencathra - Hallsfell Top"},
  {href:"https://www.walklakes.co.uk/hill_2321.html",name:"Skiddaw Little Man"},
  {href:"https://www.walklakes.co.uk/hill_2349.html",name:"Dodd (Skiddaw)"},
  {href:"https://www.walklakes.co.uk/hill_2327.html",name:"Lonscale Fell"},
  {href:"https://www.walklakes.co.uk/hill_2480.html",name:"Broom Fell"},
  {href:"https://www.walklakes.co.uk/hill_2486.html",name:"Barf"},
  {href:"https://www.walklakes.co.uk/hill_2489.html",name:"Graystones"},
  {href:"https://www.walklakes.co.uk/hill_2345.html",name:"Lord\'s Seat"},
  {href:"https://www.walklakes.co.uk/hill_2583.html",name:"Great Mell Fell"},
  {href:"https://www.walklakes.co.uk/hill_2477.html",name:"Whinlatter"},
  {href:"https://www.walklakes.co.uk/hill_2352.html",name:"Latrigg"},
  {href:"https://www.walklakes.co.uk/hill_2598.html",name:"Little Mell Fell"},
  {href:"https://www.walklakes.co.uk/hill_2495.html",name:"Fellbarrow - Mosser Fell"},
  {href:"https://www.walklakes.co.uk/hill_2547.html",name:"Clough Head"},
  {href:"https://www.walklakes.co.uk/hill_2386.html",name:"Grisedale Pike"},
  {href:"https://www.walklakes.co.uk/hill_2493.html",name:"Low Fell"},
  {href:"https://www.walklakes.co.uk/hill_2627.html",name:"High Rigg"},
  {href:"https://www.walklakes.co.uk/hill_2610.html",name:"Gowbarrow Fell (Wainwright summit)"},
  {href:"https://www.walklakes.co.uk/hill_2395.html",name:"Hopegill Head"},
  {href:"https://www.walklakes.co.uk/hill_2418.html",name:"Whiteside"},
  {href:"https://www.walklakes.co.uk/hill_2488.html",name:"Barrow"},
  {href:"https://www.walklakes.co.uk/hill_2464.html",name:"Outerside"},
  {href:"https://www.walklakes.co.uk/hill_2500.html",name:"Walla Crag"},
  {href:"https://www.walklakes.co.uk/hill_2584.html",name:"Arthur\'s Pike"},
  {href:"https://www.walklakes.co.uk/hill_2442.html",name:"Causey Pike"},
  {href:"https://www.walklakes.co.uk/hill_2484.html",name:"Burnbank Fell"},
  {href:"https://www.walklakes.co.uk/hill_2525.html",name:"Great Dodd"},
  {href:"https://www.walklakes.co.uk/hill_2432.html",name:"Scar Crags"},
  {href:"https://www.walklakes.co.uk/hill_2588.html",name:"Bonscale Pike"},
  {href:"https://www.walklakes.co.uk/hill_2374.html",name:"Crag Hill"},
  {href:"https://www.walklakes.co.uk/hill_2372.html",name:"Grasmoor"},
  {href:"https://www.walklakes.co.uk/hill_2393.html",name:"Sail"},
  {href:"https://www.walklakes.co.uk/hill_2623.html",name:"Hallin Fell"},
  {href:"https://www.walklakes.co.uk/hill_2543.html",name:"Hart Side"},
  {href:"https://www.walklakes.co.uk/hill_2490.html",name:"Cat Bells"},
  {href:"https://www.walklakes.co.uk/hill_2460.html",name:"Ard Crags"},
  {href:"https://www.walklakes.co.uk/hill_2534.html",name:"Watson\'s Dodd"},
  {href:"https://www.walklakes.co.uk/hill_2458.html",name:"Bleaberry Fell"},
  {href:"https://www.walklakes.co.uk/hill_2394.html",name:"Wandope"},
  {href:"https://www.walklakes.co.uk/hill_2462.html",name:"Blake Fell"},
  {href:"https://www.walklakes.co.uk/hill_2526.html",name:"Stybarrow Dodd"},
  {href:"https://www.walklakes.co.uk/hill_2434.html",name:"Whiteless Pike"},
  {href:"https://www.walklakes.co.uk/hill_2487.html",name:"Raven Crag"},
  {href:"https://www.walklakes.co.uk/hill_2465.html",name:"Knott Rigg"},
  {href:"https://www.walklakes.co.uk/hill_2479.html",name:"Mellbreak"},
  {href:"https://www.walklakes.co.uk/hill_2615.html",name:"Steel Knotts"},
  {href:"https://www.walklakes.co.uk/hill_2554.html",name:"Sheffield Pike"},
  {href:"https://www.walklakes.co.uk/hill_2556.html",name:"Loadpot Hill"},
  {href:"https://www.walklakes.co.uk/hill_2474.html",name:"Gavel Fell"},
  {href:"https://www.walklakes.co.uk/hill_2461.html",name:"Maiden Moor"},
  {href:"https://www.walklakes.co.uk/hill_2502.html",name:"Rannerdale Knotts"},
  {href:"https://www.walklakes.co.uk/hill_2455.html",name:"High Seat"},
  {href:"https://www.walklakes.co.uk/hill_2481.html",name:"Hen Comb"},
  {href:"https://www.walklakes.co.uk/hill_2612.html",name:"Glenridding Dodd"},
  {href:"https://www.walklakes.co.uk/hill_2520.html",name:"Raise"},
  {href:"https://www.walklakes.co.uk/hill_2595.html",name:"Beda Fell"},
  {href:"https://www.walklakes.co.uk/hill_2561.html",name:"Place Fell"},
  {href:"https://www.walklakes.co.uk/hill_2557.html",name:"Wether Hill"},
  {href:"https://www.walklakes.co.uk/hill_2523.html",name:"White Side"},
  {href:"https://www.walklakes.co.uk/hill_2405.html",name:"Robinson"},
  {href:"https://www.walklakes.co.uk/hill_2478.html",name:"High Tove"},
  {href:"https://www.walklakes.co.uk/hill_2411.html",name:"Hindscarth"},
  {href:"https://www.walklakes.co.uk/hill_2496.html",name:"Grange Fell"},
  {href:"https://www.walklakes.co.uk/hill_2436.html",name:"High Spy"},
  {href:"https://www.walklakes.co.uk/hill_2549.html",name:"Birkhouse Moor"},
  {href:"https://www.walklakes.co.uk/hill_2451.html",name:"Great Borne"},
  {href:"https://www.walklakes.co.uk/hill_2518.html",name:"Catstye Cam"},
  {href:"https://www.walklakes.co.uk/hill_2510.html",name:"Castle Crag"},
  {href:"https://www.walklakes.co.uk/hill_2483.html",name:"Armboth Fell"},
  {href:"https://www.walklakes.co.uk/hill_2445.html",name:"Starling Dodd"},
  {href:"https://www.walklakes.co.uk/hill_2577.html",name:"The Nab"},
  {href:"https://www.walklakes.co.uk/hill_2399.html",name:"Red Pike (Buttermere)"},
  {href:"https://www.walklakes.co.uk/hill_2400.html",name:"Dale Head"},
  {href:"https://www.walklakes.co.uk/hill_2515.html",name:"Helvellyn"},
  {href:"https://www.walklakes.co.uk/hill_2614.html",name:"Arnison Crag"},
  {href:"https://www.walklakes.co.uk/hill_2579.html",name:"Angletarn Pikes"},
  {href:"https://www.walklakes.co.uk/hill_2491.html",name:"Great Crag (Stonethwaite)"},
  {href:"https://www.walklakes.co.uk/hill_3728.html",name:"High Stile"},
  {href:"https://www.walklakes.co.uk/hill_2570.html",name:"Birks"},
  {href:"https://www.walklakes.co.uk/hill_2517.html",name:"Nethermost Pike"},
  {href:"https://www.walklakes.co.uk/hill_2476.html",name:"Crag Fell"},
  {href:"https://www.walklakes.co.uk/hill_2438.html",name:"Fleetwith Pike"},
  {href:"https://www.walklakes.co.uk/hill_2553.html",name:"Rest Dodd"},
  {href:"https://www.walklakes.co.uk/hill_2582.html",name:"Brock Crags (Wainwright)"},
  {href:"https://www.walklakes.co.uk/hill_2401.html",name:"High Crag (Buttermere)"},
  {href:"https://www.walklakes.co.uk/hill_2482.html",name:"Grike"},
  {href:"https://www.walklakes.co.uk/hill_2530.html",name:"High Raise (High Street)"},
  {href:"https://www.walklakes.co.uk/hill_2527.html",name:"St Sunday Crag"},
  {href:"https://www.walklakes.co.uk/hill_2524.html",name:"Dollywaggon Pike"},
  {href:"https://www.walklakes.co.uk/hill_2532.html",name:"Rampsgill Head"},
  {href:"https://www.walklakes.co.uk/hill_2457.html",name:"Haystacks (Buttermere)"},
  {href:"https://www.walklakes.co.uk/hill_2544.html",name:"The Knott (High Street)"},
  {href:"https://www.walklakes.co.uk/hill_2536.html",name:"Kidsty Pike"},
  {href:"https://www.walklakes.co.uk/hill_2424.html",name:"Grey Knotts"},
  {href:"https://www.walklakes.co.uk/hill_2467.html",name:"Rosthwaite Fell - Bessyboot"},
  {href:"https://www.walklakes.co.uk/hill_2412.html",name:"Ullscarf"},
  {href:"https://www.walklakes.co.uk/hill_2578.html",name:"Hartsop Above How"},
  {href:"https://www.walklakes.co.uk/hill_2475.html",name:"Eagle Crag"},
  {href:"https://www.walklakes.co.uk/hill_2572.html",name:"Hartsop Dodd"},
  {href:"https://www.walklakes.co.uk/hill_2368.html",name:"Pillar"},
  {href:"https://www.walklakes.co.uk/hill_2552.html",name:"Gray Crag"},
  {href:"https://www.walklakes.co.uk/hill_2521.html",name:"Fairfield"},
  {href:"https://www.walklakes.co.uk/hill_2416.html",name:"Brandreth"},
  {href:"https://www.walklakes.co.uk/hill_2545.html",name:"Seat Sandal"},
  {href:"https://www.walklakes.co.uk/hill_2471.html",name:"Lank Rigg"},
  {href:"https://www.walklakes.co.uk/hill_2379.html",name:"Steeple"},
  {href:"https://www.walklakes.co.uk/hill_2563.html",name:"Selside Pike"},
  {href:"https://www.walklakes.co.uk/hill_2529.html",name:"Hart Crag"},
  {href:"https://www.walklakes.co.uk/hill_2439.html",name:"Base Brown"},
  {href:"https://www.walklakes.co.uk/hill_2463.html",name:"Sergeant\'s Crag"},
  {href:"https://www.walklakes.co.uk/hill_2528.html",name:"High Street"},
  {href:"https://www.walklakes.co.uk/hill_2466.html",name:"Steel Fell"},
  {href:"https://www.walklakes.co.uk/hill_2373.html",name:"Scoat Fell"},
  {href:"https://www.walklakes.co.uk/hill_2589.html",name:"High Hartsop Dodd"},
  {href:"https://www.walklakes.co.uk/hill_2425.html",name:"Caw Fell"},
  {href:"https://www.walklakes.co.uk/hill_2384.html",name:"Green Gable"},
  {href:"https://www.walklakes.co.uk/hill_2533.html",name:"Dove Crag"},
  {href:"https://www.walklakes.co.uk/hill_2539.html",name:"Great Rigg"},
  {href:"https://www.walklakes.co.uk/hill_2385.html",name:"Haycock"},
  {href:"https://www.walklakes.co.uk/hill_2472.html",name:"Calf Crag"},
  {href:"https://www.walklakes.co.uk/hill_2378.html",name:"Red Pike (Wasdale)"},
  {href:"https://www.walklakes.co.uk/hill_2389.html",name:"Glaramara"},
  {href:"https://www.walklakes.co.uk/hill_2541.html",name:"Mardale Ill Bell"},
  {href:"https://www.walklakes.co.uk/hill_2383.html",name:"Kirk Fell"},
  {href:"https://www.walklakes.co.uk/hill_2550.html",name:"Branstree"},
  {href:"https://www.walklakes.co.uk/hill_2535.html",name:"Thornthwaite Crag"},
  {href:"https://www.walklakes.co.uk/hill_2367.html",name:"Great Gable"},
  {href:"https://www.walklakes.co.uk/hill_2540.html",name:"Stony Cove Pike"},
  {href:"https://www.walklakes.co.uk/hill_2566.html",name:"Little Hart Crag"},
  {href:"https://www.walklakes.co.uk/hill_2494.html",name:"Gibson Knott"},
  {href:"https://www.walklakes.co.uk/hill_2456.html",name:"Seathwaite Fell (Wainwright summit)"},
  {href:"https://www.walklakes.co.uk/hill_2564.html",name:"Middle Dodd"},
  {href:"https://www.walklakes.co.uk/hill_2537.html",name:"Harter Fell (Mardale)"},
  {href:"https://www.walklakes.co.uk/hill_2396.html",name:"High Raise"},
  {href:"https://www.walklakes.co.uk/hill_2498.html",name:"Helm Crag"},
  {href:"https://www.walklakes.co.uk/hill_2468.html",name:"Tarn Crag (Easedale)"},
  {href:"https://www.walklakes.co.uk/hill_2601.html",name:"Stone Arthur"},
  {href:"https://www.walklakes.co.uk/hill_2562.html",name:"High Pike (Scandale)"},
  {href:"https://www.walklakes.co.uk/hill_2538.html",name:"Red Screes"},
  {href:"https://www.walklakes.co.uk/hill_2407.html",name:"Sergeant Man"},
  {href:"https://www.walklakes.co.uk/hill_2548.html",name:"Froswick"},
  {href:"https://www.walklakes.co.uk/hill_2388.html",name:"Allen Crags"},
  {href:"https://www.walklakes.co.uk/hill_2573.html",name:"Heron Pike (Rydal)"},
  {href:"https://www.walklakes.co.uk/hill_2364.html",name:"Great End"},
  {href:"https://www.walklakes.co.uk/hill_2450.html",name:"Yewbarrow"},
  {href:"https://www.walklakes.co.uk/hill_2427.html",name:"Seatallan"},
  {href:"https://www.walklakes.co.uk/hill_2559.html",name:"Tarn Crag (Sleddale)"},
  {href:"https://www.walklakes.co.uk/hill_2382.html",name:"Lingmell"},
  {href:"https://www.walklakes.co.uk/hill_2546.html",name:"Kentmere Pike"},
  {href:"https://www.walklakes.co.uk/hill_2413.html",name:"Thunacar Knott"},
  {href:"https://www.walklakes.co.uk/hill_2596.html",name:"Low Pike"},
  {href:"https://www.walklakes.co.uk/hill_2542.html",name:"Ill Bell"},
  {href:"https://www.walklakes.co.uk/hill_2423.html",name:"Pavey Ark"},
  {href:"https://www.walklakes.co.uk/hill_2470.html",name:"Blea Rigg"},
  {href:"https://www.walklakes.co.uk/hill_2437.html",name:"Rossett Pike"},
  {href:"https://www.walklakes.co.uk/hill_2565.html",name:"Grey Crag"},
  {href:"https://www.walklakes.co.uk/hill_2369.html",name:"Esk Pike"},
  {href:"https://www.walklakes.co.uk/hill_2406.html",name:"Harrison Stickle"},
  {href:"https://www.walklakes.co.uk/hill_2611.html",name:"Nab Scar"},
  {href:"https://www.walklakes.co.uk/hill_2417.html",name:"Pike of Stickle"},
  {href:"https://www.walklakes.co.uk/hill_2430.html",name:"Loft Crag"},
  {href:"https://www.walklakes.co.uk/hill_2359.html",name:"Scafell Pike"},
  {href:"https://www.walklakes.co.uk/hill_2459.html",name:"Middle Fell"},
  {href:"https://www.walklakes.co.uk/hill_2551.html",name:"Yoke"},
  {href:"https://www.walklakes.co.uk/hill_2499.html",name:"Silver How"},
  {href:"https://www.walklakes.co.uk/hill_2626.html",name:"Troutbeck Tongue"},
  {href:"https://www.walklakes.co.uk/hill_2574.html",name:"Shipman Knotts"},
  {href:"https://www.walklakes.co.uk/hill_2365.html",name:"Bowfell"},
  {href:"https://www.walklakes.co.uk/hill_2360.html",name:"Scafell"},
  {href:"https://www.walklakes.co.uk/hill_2497.html",name:"Buckbarrow"},
  {href:"https://www.walklakes.co.uk/hill_2607.html",name:"Baystones"},
  {href:"https://www.walklakes.co.uk/hill_2507.html",name:"Loughrigg Fell"},
  {href:"https://www.walklakes.co.uk/hill_2397.html",name:"Slight Side"},
  {href:"https://www.walklakes.co.uk/hill_2371.html",name:"Crinkle Crags - Long Top"},
  {href:"https://www.walklakes.co.uk/hill_2454.html",name:"Illgill Head"},
  {href:"https://www.walklakes.co.uk/hill_2485.html",name:"Lingmoor Fell"},
  {href:"https://www.walklakes.co.uk/hill_2590.html",name:"Sallows"},
  {href:"https://www.walklakes.co.uk/hill_2419.html",name:"Pike of Blisco"},
  {href:"https://www.walklakes.co.uk/hill_2422.html",name:"Cold Pike"},
  {href:"https://www.walklakes.co.uk/hill_2609.html",name:"Sour Howes"},
  {href:"https://www.walklakes.co.uk/hill_2473.html",name:"Whin Rigg (Wasdale)"},
  {href:"https://www.walklakes.co.uk/hill_2469.html",name:"Hard Knott"},
  {href:"https://www.walklakes.co.uk/hill_2508.html",name:"Black Fell"},
  {href:"https://www.walklakes.co.uk/hill_2640.html",name:"Wetherlam"},
  {href:"https://www.walklakes.co.uk/hill_2637.html",name:"Great Carrs"},
  {href:"https://www.walklakes.co.uk/hill_2673.html",name:"Holme Fell"},
  {href:"https://www.walklakes.co.uk/hill_2635.html",name:"Swirl How"},
  {href:"https://www.walklakes.co.uk/hill_2639.html",name:"Grey Friar"},
  {href:"https://www.walklakes.co.uk/hill_2643.html",name:"Harter Fell (Eskdale)"},
  {href:"https://www.walklakes.co.uk/hill_2636.html",name:"Brim Fell"},
  {href:"https://www.walklakes.co.uk/hill_2655.html",name:"Green Crag"},
  {href:"https://www.walklakes.co.uk/hill_2634.html",name:"The Old Man of Coniston"},
  {href:"https://www.walklakes.co.uk/hill_2638.html",name:"Dow Crag"},
]

type Wainwright = {
  id: number,
  name: string,
  area: string,
  county: string,
  country: string,
  classification: string,
  height: string,
  gridRef: string,
  notes: string,
  coords: [number, number],
}

const wainwrightList: Wainwright[] = 
[
  {
    "id": 2351,
    "name": "Binsey",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, HuMP, Fellranger, Synge, and Tump",
    "height": "447m",
    "gridRef": "NY225355",
    "notes": "ground by windshelter 7m W at NY 22507 35528 is 10cm lower although loose rocks are higher; cairn 14m E at NY 22529 35525 is 30cm lower",
    "coords": [
      54.708795,
      -3.204188
    ]
  },
  {
    "id": 2350,
    "name": "Longlands Fell",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and Tump",
    "height": "483m",
    "gridRef": "NY275354",
    "notes": "ground 2m SSE is highest point",
    "coords": [
      54.708411,
      -3.125313
    ]
  },
  {
    "id": 2344,
    "name": "Brae Fell",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "586m",
    "gridRef": "NY288351",
    "notes": "",
    "coords": [
      54.70642,
      -3.105361
    ]
  },
  {
    "id": 2337,
    "name": "High Pike (Caldbeck)",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "658m",
    "gridRef": "NY318350",
    "notes": "trig point 8m N is slightly lower",
    "coords": [
      54.705416,
      -3.058742
    ]
  },
  {
    "id": 2338,
    "name": "Great Sca Fell",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and deleted Nuttall",
    "height": "651m",
    "gridRef": "NY291339",
    "notes": "ground within 5m radius of similar height; cairn built since Wainwright volume was published",
    "coords": [
      54.695145,
      -3.100989
    ]
  },
  {
    "id": 2346,
    "name": "Meal Fell",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dewey, sub Dodd, Fellranger, and Synge",
    "height": "549.4m",
    "gridRef": "NY283337",
    "notes": "cairn is 2m higher and 65m NE of large shelter (Wainwright/Birkett summit) which is at NY 28258 33711",
    "coords": [
      54.693795,
      -3.113923
    ]
  },
  {
    "id": 2336,
    "name": "Carrock Fell",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "662.3m",
    "gridRef": "NY341336",
    "notes": "",
    "coords": [
      54.693484,
      -3.02287
    ]
  },
  {
    "id": 2347,
    "name": "Great Cockup",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, sub HuMP, Fellranger, Synge, and Tump",
    "height": "526m",
    "gridRef": "NY273333",
    "notes": "",
    "coords": [
      54.689677,
      -3.128766
    ]
  },
  {
    "id": 2328,
    "name": "Knott",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "710m",
    "gridRef": "NY296329",
    "notes": "",
    "coords": [
      54.686982,
      -3.093322
    ]
  },
  {
    "id": 2331,
    "name": "Great Calva",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, sub Marilyn, Fellranger, Synge, Sim, and Tump",
    "height": "691m",
    "gridRef": "NY290311",
    "notes": "",
    "coords": [
      54.67077,
      -3.101074
    ]
  },
  {
    "id": 2333,
    "name": "Bakestall",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "673m",
    "gridRef": "NY266307",
    "notes": "Wainwright cairn is 100m N at NY 26634 30855",
    "coords": [
      54.666457,
      -3.138898
    ]
  },
  {
    "id": 2329,
    "name": "Bowscale Fell",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "702m",
    "gridRef": "NY333305",
    "notes": "cairn 50m NE at NY 33382 30609 is c 2m lower",
    "coords": [
      54.665538,
      -3.035037
    ]
  },
  {
    "id": 2503,
    "name": "Sale Fell",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, HuMP, Fellranger, Synge, and Tump",
    "height": "359m",
    "gridRef": "NY194296",
    "notes": "note: cairn described by Wainwright and Birkett has been largely destroyed",
    "coords": [
      54.655627,
      -3.250157
    ]
  },
  {
    "id": 2348,
    "name": "Souther Fell",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, Fellranger, Synge, and Tump",
    "height": "522m",
    "gridRef": "NY354291",
    "notes": "",
    "coords": [
      54.653236,
      -3.001663
    ]
  },
  {
    "id": 2340,
    "name": "Mungrisdale Common",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright and Synge",
    "height": "631.8m",
    "gridRef": "NY311292",
    "notes": "ground by cairn 120m W at NY 31055 29228 is 0.3m lower",
    "coords": [
      54.653232,
      -3.068359
    ]
  },
  {
    "id": 2332,
    "name": "Bannerdale Crags",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "684.1m",
    "gridRef": "NY335290",
    "notes": "Wainwright's cairn is 100m NE at NY 33612 29076 and is lower",
    "coords": [
      54.65195,
      -3.031731
    ]
  },
  {
    "id": 2319,
    "name": "Skiddaw",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Furth, Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "930.4m",
    "gridRef": "NY260290",
    "notes": "note Wainwright and Birkett describe trig point as summit",
    "coords": [
      54.651391,
      -3.147761
    ]
  },
  {
    "id": 2330,
    "name": "Ullock Pike",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and deleted Nuttall",
    "height": "690.4m",
    "gridRef": "NY244287",
    "notes": "",
    "coords": [
      54.648261,
      -3.172486
    ]
  },
  {
    "id": 2326,
    "name": "Long Side",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "734m",
    "gridRef": "NY248284",
    "notes": "ground 35m W at NY 24844 28447 is 1.5m lower",
    "coords": [
      54.645505,
      -3.165618
    ]
  },
  {
    "id": 2501,
    "name": "Ling Fell",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, sub HuMP, Fellranger, Synge, and Tump",
    "height": "374m",
    "gridRef": "NY179285",
    "notes": "ground is 0.7m higher than trig point 70m NNW at NY17961 28593 (Wainwright,Birkett); cairn 50m N at NY 17982 28582 is 0.5m lower",
    "coords": [
      54.645249,
      -3.272325
    ]
  },
  {
    "id": 2325,
    "name": "Carl Side",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Fellranger, Synge, and sub Sim",
    "height": "746.8m",
    "gridRef": "NY254280",
    "notes": "",
    "coords": [
      54.642398,
      -3.155984
    ]
  },
  {
    "id": 2320,
    "name": "Blencathra - Hallsfell Top",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "867.8m",
    "gridRef": "NY323277",
    "notes": "ground 2m N of trig point about as high",
    "coords": [
      54.639949,
      -3.049789
    ]
  },
  {
    "id": 2321,
    "name": "Skiddaw Little Man",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "865m",
    "gridRef": "NY266277",
    "notes": "Wainwright summit is the cairn (NY 26680 27785)",
    "coords": [
      54.639911,
      -3.137629
    ]
  },
  {
    "id": 2349,
    "name": "Dodd (Skiddaw)",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, HuMP, Fellranger, Synge, and Tump",
    "height": "502m",
    "gridRef": "NY244273",
    "notes": "",
    "coords": [
      54.63561,
      -3.172122
    ]
  },
  {
    "id": 2327,
    "name": "Lonscale Fell",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "715m",
    "gridRef": "NY285271",
    "notes": "cairn (NY 28540 27171) is Wainwright and Birkett summit",
    "coords": [
      54.634357,
      -3.108518
    ]
  },
  {
    "id": 2480,
    "name": "Broom Fell",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, sub Dodd, Fellranger, and Synge",
    "height": "510.2m",
    "gridRef": "NY195270",
    "notes": "Wainwright summit cairn is 170m NW at NY 19444 27291 and is 0.9m lower",
    "coords": [
      54.632165,
      -3.247904
    ]
  },
  {
    "id": 2486,
    "name": "Barf",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and Tump",
    "height": "469m",
    "gridRef": "NY214267",
    "notes": "",
    "coords": [
      54.629665,
      -3.218084
    ]
  },
  {
    "id": 2489,
    "name": "Graystones",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright",
    "height": "450.4m",
    "gridRef": "NY176266",
    "notes": "",
    "coords": [
      54.627991,
      -3.277642
    ]
  },
  {
    "id": 2345,
    "name": "Lord's Seat",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Dodd, Dewey, HuMP, Fellranger, Synge, and Tump",
    "height": "552m",
    "gridRef": "NY204265",
    "notes": "",
    "coords": [
      54.627823,
      -3.233984
    ]
  },
  {
    "id": 2583,
    "name": "Great Mell Fell",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Dodd, Dewey, HuMP, Fellranger, Synge, and Tump",
    "height": "537m",
    "gridRef": "NY396253",
    "notes": "",
    "coords": [
      54.619846,
      -2.935641
    ]
  },
  {
    "id": 2477,
    "name": "Whinlatter",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "517m",
    "gridRef": "NY191251",
    "notes": "highest point is ground 6m E of shelter at NY 19119 25135",
    "coords": [
      54.614855,
      -3.254033
    ]
  },
  {
    "id": 2352,
    "name": "Latrigg",
    "area": "Northern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and Tump",
    "height": "369m",
    "gridRef": "NY279247",
    "notes": "Wainwright summit position uncertain, 1203' height 80m SW at NY 27849 24654 is c.2m lower",
    "coords": [
      54.612432,
      -3.117863
    ]
  },
  {
    "id": 2598,
    "name": "Little Mell Fell",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Dodd, Dewey, HuMP, Fellranger, Synge, and Tump",
    "height": "505m",
    "gridRef": "NY423240",
    "notes": "ground 30m W at NY 42296 24019 & 25m SW at NY 42306 24000 are just lower",
    "coords": [
      54.608024,
      -2.894465
    ]
  },
  {
    "id": 2495,
    "name": "Fellbarrow - Mosser Fell",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and Tump",
    "height": "416m",
    "gridRef": "NY132242",
    "notes": "trig point (NY 13222 24247) 5m E of cairn is Wainwright and Birkett and is 15cm lower",
    "coords": [
      54.60582,
      -3.344699
    ]
  },
  {
    "id": 2547,
    "name": "Clough Head",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "726m",
    "gridRef": "NY333225",
    "notes": "",
    "coords": [
      54.593661,
      -3.032362
    ]
  },
  {
    "id": 2386,
    "name": "Grisedale Pike",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "791m",
    "gridRef": "NY198225",
    "notes": "",
    "coords": [
      54.591745,
      -3.242071
    ]
  },
  {
    "id": 2493,
    "name": "Low Fell",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, HuMP, Fellranger, Synge, and Tump",
    "height": "423m",
    "gridRef": "NY137226",
    "notes": "about 8m higher than S top (hill 3780 Loweswater Fell)",
    "coords": [
      54.591358,
      -3.336608
    ]
  },
  {
    "id": 2627,
    "name": "High Rigg",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, HuMP, Fellranger, Synge, and Tump",
    "height": "355m",
    "gridRef": "NY308219",
    "notes": "",
    "coords": [
      54.588432,
      -3.071568
    ]
  },
  {
    "id": 2610,
    "name": "Gowbarrow Fell (Wainwright summit)",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "481.2m",
    "gridRef": "NY407218",
    "notes": "trig point is Wainwright/Birkett but rocks 3m S and 8m S are higher (16 cm below FB); N knoll of S top (Hill 7833) 105m S at NY 40730 21722 is 1cm higher than rocks",
    "coords": [
      54.58811,
      -2.918201
    ]
  },
  {
    "id": 2395,
    "name": "Hopegill Head",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, sub HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "769.6m",
    "gridRef": "NY185221",
    "notes": "",
    "coords": [
      54.588082,
      -3.261675
    ]
  },
  {
    "id": 2418,
    "name": "Whiteside",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Fellranger, and Synge",
    "height": "707m",
    "gridRef": "NY170219",
    "notes": "",
    "coords": [
      54.585912,
      -3.285161
    ]
  },
  {
    "id": 2488,
    "name": "Barrow",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and Tump",
    "height": "455m",
    "gridRef": "NY227218",
    "notes": "",
    "coords": [
      54.58566,
      -3.19752
    ]
  },
  {
    "id": 2464,
    "name": "Outerside",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, Fellranger, Synge, and Tump",
    "height": "568m",
    "gridRef": "NY211214",
    "notes": "30cm higher than small rock 15m NE",
    "coords": [
      54.582169,
      -3.222159
    ]
  },
  {
    "id": 2500,
    "name": "Walla Crag",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "379m",
    "gridRef": "NY276212",
    "notes": "",
    "coords": [
      54.581608,
      -3.120377
    ]
  },
  {
    "id": 2584,
    "name": "Arthur's Pike",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "533m",
    "gridRef": "NY460206",
    "notes": "probably Wainwright/Birkett summit; also cairn 190m SSE at NY 46165 20510 and knoll 50m S at NY 46056 20627 may be as high",
    "coords": [
      54.578426,
      -2.835799
    ]
  },
  {
    "id": 2442,
    "name": "Causey Pike",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "637m",
    "gridRef": "NY218208",
    "notes": "this summit is highest point and 3-5m higher than next 3 summits W on ridge",
    "coords": [
      54.576817,
      -3.210133
    ]
  },
  {
    "id": 2484,
    "name": "Burnbank Fell",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, and Synge",
    "height": "475m",
    "gridRef": "NY110209",
    "notes": "metal fence post is W & B; cairn 5m W is as high",
    "coords": [
      54.575943,
      -3.37834
    ]
  },
  {
    "id": 2525,
    "name": "Great Dodd",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "857m",
    "gridRef": "NY342205",
    "notes": "ground is 20cm higher than cairn at NY 34195 20557 and equal in height with ground 30m SE at NY 34228 20506; Wainwright shelter is at NY 34272 20452",
    "coords": [
      54.575689,
      -3.019377
    ]
  },
  {
    "id": 2432,
    "name": "Scar Crags",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "672m",
    "gridRef": "NY208206",
    "notes": "0.75m higher than ground around Wainwright cairn 120m SW at NY 20749 20598",
    "coords": [
      54.574968,
      -3.225951
    ]
  },
  {
    "id": 2588,
    "name": "Bonscale Pike",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "524m",
    "gridRef": "NY453200",
    "notes": "probably Wainwright summit but slightly lower than cairn 140m S at NY 45314 19950",
    "coords": [
      54.573028,
      -2.846935
    ]
  },
  {
    "id": 2374,
    "name": "Crag Hill",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "839.2m",
    "gridRef": "NY192203",
    "notes": "30cm higher than trig point at NY 19270 20365. Note trig point is Wainwright summit.",
    "coords": [
      54.571762,
      -3.250234
    ]
  },
  {
    "id": 2372,
    "name": "Grasmoor",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "851.6m",
    "gridRef": "NY174203",
    "notes": "ground 100m ENE at NY 17580 20375 is 0.5m lower",
    "coords": [
      54.571635,
      -3.277905
    ]
  },
  {
    "id": 2393,
    "name": "Sail",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "773m",
    "gridRef": "NY198202",
    "notes": "cairn is at NY 19821 20281",
    "coords": [
      54.571328,
      -3.241821
    ]
  },
  {
    "id": 2623,
    "name": "Hallin Fell",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, HuMP, Fellranger, Synge, and Tump",
    "height": "388m",
    "gridRef": "NY433198",
    "notes": "ground 45m SSE at NY 43323 19781 is of similar height",
    "coords": [
      54.570412,
      -2.878498
    ]
  },
  {
    "id": 2543,
    "name": "Hart Side",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Fellranger, Synge, and sub Sim",
    "height": "756m",
    "gridRef": "NY359197",
    "notes": "rock 6m NW is as high; NW cairn is at NY 35887 19748 and SE cairn at NY 35912 19734 and both are lower",
    "coords": [
      54.568719,
      -2.992938
    ]
  },
  {
    "id": 2490,
    "name": "Cat Bells",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and Tump",
    "height": "451m",
    "gridRef": "NY244198",
    "notes": "tiny flat cairn no longer exists",
    "coords": [
      54.568316,
      -3.1707
    ]
  },
  {
    "id": 2460,
    "name": "Ard Crags",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, HuMP, Fellranger, Synge, and Tump",
    "height": "581m",
    "gridRef": "NY206197",
    "notes": "cairn described by Wainwright is no longer present",
    "coords": [
      54.566938,
      -3.228123
    ]
  },
  {
    "id": 2534,
    "name": "Watson's Dodd",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "789m",
    "gridRef": "NY335195",
    "notes": "",
    "coords": [
      54.566917,
      -3.028995
    ]
  },
  {
    "id": 2458,
    "name": "Bleaberry Fell",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, Fellranger, Synge, and Tump",
    "height": "590m",
    "gridRef": "NY285195",
    "notes": "rock 30m SE of wind shelter is as high, wind shelter is Wainwright summit",
    "coords": [
      54.56637,
      -3.106177
    ]
  },
  {
    "id": 2394,
    "name": "Wandope",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "773.9m",
    "gridRef": "NY188197",
    "notes": "",
    "coords": [
      54.566272,
      -3.257089
    ]
  },
  {
    "id": 2462,
    "name": "Blake Fell",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Dodd, Dewey, HuMP, Fellranger, Synge, and Tump",
    "height": "573m",
    "gridRef": "NY110196",
    "notes": "",
    "coords": [
      54.564569,
      -3.377198
    ]
  },
  {
    "id": 2526,
    "name": "Stybarrow Dodd",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "843.7m",
    "gridRef": "NY343189",
    "notes": "ground is 20cm higher than cairn (NY 34296 18923)",
    "coords": [
      54.561128,
      -3.017405
    ]
  },
  {
    "id": 2434,
    "name": "Whiteless Pike",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "660m",
    "gridRef": "NY180189",
    "notes": "",
    "coords": [
      54.559367,
      -3.26931
    ]
  },
  {
    "id": 2487,
    "name": "Raven Crag",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and Tump",
    "height": "461m",
    "gridRef": "NY303187",
    "notes": "",
    "coords": [
      54.559231,
      -3.07872
    ]
  },
  {
    "id": 2465,
    "name": "Knott Rigg",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, Fellranger, Synge, and Tump",
    "height": "556m",
    "gridRef": "NY197188",
    "notes": "",
    "coords": [
      54.558701,
      -3.242613
    ]
  },
  {
    "id": 2479,
    "name": "Mellbreak",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Dodd, Dewey, HuMP, Fellranger, Synge, and Tump",
    "height": "512m",
    "gridRef": "NY148186",
    "notes": "cairn described by Wainwright no longer present but may have been on small rocky outcrop 55m S at NY 14839 18558; this is 2m lower",
    "coords": [
      54.555581,
      -3.318258
    ]
  },
  {
    "id": 2615,
    "name": "Steel Knotts",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and Tump",
    "height": "432m",
    "gridRef": "NY440181",
    "notes": "",
    "coords": [
      54.555245,
      -2.866807
    ]
  },
  {
    "id": 2554,
    "name": "Sheffield Pike",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, sub HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "676.1m",
    "gridRef": "NY369181",
    "notes": "",
    "coords": [
      54.554936,
      -2.977002
    ]
  },
  {
    "id": 2556,
    "name": "Loadpot Hill",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "672m",
    "gridRef": "NY456180",
    "notes": "trig point is at NY 45686 18123 and is 40cm lower; boundary stone 100m ENE at NY 45731 18083 is <40cm lower",
    "coords": [
      54.554737,
      -2.842087
    ]
  },
  {
    "id": 2474,
    "name": "Gavel Fell",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, Fellranger, Synge, and Tump",
    "height": "524.3m",
    "gridRef": "NY116185",
    "notes": "Wainwright cairn at NY 11698 18384 is 0.2m lower",
    "coords": [
      54.554011,
      -3.367472
    ]
  },
  {
    "id": 2461,
    "name": "Maiden Moor",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "575m",
    "gridRef": "NY236181",
    "notes": "Wainwright cairn 15m NW at NY 23671 18202 is 5cm lower and ground 55m SE at NY 23700 18140 is 20cm lower",
    "coords": [
      54.553174,
      -3.181585
    ]
  },
  {
    "id": 2502,
    "name": "Rannerdale Knotts",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and Tump",
    "height": "355m",
    "gridRef": "NY167182",
    "notes": "rock 2m S of cairn is actually the highest point",
    "coords": [
      54.552643,
      -3.289032
    ]
  },
  {
    "id": 2455,
    "name": "High Seat",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dewey, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "609m",
    "gridRef": "NY287180",
    "notes": "rock is 0.3m higher than FB; cairn 85m ENE at NY 28788 18074 might be higher",
    "coords": [
      54.552623,
      -3.103764
    ]
  },
  {
    "id": 2481,
    "name": "Hen Comb",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, HuMP, Fellranger, Synge, and Tump",
    "height": "506.2m",
    "gridRef": "NY132181",
    "notes": "",
    "coords": [
      54.550848,
      -3.343261
    ]
  },
  {
    "id": 2612,
    "name": "Glenridding Dodd",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and Tump",
    "height": "442m",
    "gridRef": "NY380175",
    "notes": "",
    "coords": [
      54.54947,
      -2.959246
    ]
  },
  {
    "id": 2520,
    "name": "Raise",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, sub HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "882.7m",
    "gridRef": "NY342174",
    "notes": "",
    "coords": [
      54.547718,
      -3.017473
    ]
  },
  {
    "id": 2595,
    "name": "Beda Fell",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, Fellranger, Synge, and Tump",
    "height": "509m",
    "gridRef": "NY428171",
    "notes": "ground 140m SW at NY 42800 17048 is as high",
    "coords": [
      54.54649,
      -2.884399
    ]
  },
  {
    "id": 2561,
    "name": "Place Fell",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "657m",
    "gridRef": "NY405169",
    "notes": "outcrop is 0.3m higher than trig point 30m E (NY 40560 16950); cairn is Wainwright summit.",
    "coords": [
      54.544269,
      -2.920725
    ]
  },
  {
    "id": 2557,
    "name": "Wether Hill",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and deleted Nuttall",
    "height": "671m",
    "gridRef": "NY455167",
    "notes": "cairn (Wainwright/Birkett) is 30m NW at NY45571 16782; summit is 3-4m lower than ground 400m S (Hill 2927)",
    "coords": [
      54.543239,
      -2.842453
    ]
  },
  {
    "id": 2523,
    "name": "White Side",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "863.2m",
    "gridRef": "NY337166",
    "notes": "",
    "coords": [
      54.540904,
      -3.025063
    ]
  },
  {
    "id": 2405,
    "name": "Robinson",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "737m",
    "gridRef": "NY201168",
    "notes": "rock 4m SW is just lower; rock under cairn 10m W at NY 20180 16873 is c 30cm lower",
    "coords": [
      54.540803,
      -3.235082
    ]
  },
  {
    "id": 2478,
    "name": "High Tove",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "515m",
    "gridRef": "NY289165",
    "notes": "ground 10m N of cairn is as high",
    "coords": [
      54.53886,
      -3.100209
    ]
  },
  {
    "id": 2411,
    "name": "Hindscarth",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "727m",
    "gridRef": "NY215165",
    "notes": "several rocks nearby look higher but are not",
    "coords": [
      54.537828,
      -3.213755
    ]
  },
  {
    "id": 2496,
    "name": "Grange Fell",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and Tump",
    "height": "417.2m",
    "gridRef": "NY264162",
    "notes": "Wainwright's rock tor 70m SW at NY 26412 16240 is 1m - 2m lower",
    "coords": [
      54.536408,
      -3.137963
    ]
  },
  {
    "id": 2436,
    "name": "High Spy",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, sub Marilyn, Fellranger, Synge, Sim, and Tump",
    "height": "653.1m",
    "gridRef": "NY234162",
    "notes": "ground 7m NE and also 30m S at NY 23420 16200 is as high",
    "coords": [
      54.535568,
      -3.185141
    ]
  },
  {
    "id": 2549,
    "name": "Birkhouse Moor",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Fellranger, Synge, and sub Sim",
    "height": "717.6m",
    "gridRef": "NY363159",
    "notes": "higher than large cairn 450m NNE at NY 36524 16393",
    "coords": [
      54.535033,
      -2.98532
    ]
  },
  {
    "id": 2451,
    "name": "Great Borne",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "616m",
    "gridRef": "NY123163",
    "notes": "rock is 22m S of trig point (Wainwright's summit at NY 12391 16381) and 40cm higher than rock by trig point; rock is 12m S of windshelter (Birkett's summit at NY 12395 16373) and 10cm higher than its floor; Wainwright's 'north top' is lower",
    "coords": [
      54.534903,
      -3.355427
    ]
  },
  {
    "id": 2518,
    "name": "Catstye Cam",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "889.6m",
    "gridRef": "NY348158",
    "notes": "",
    "coords": [
      54.533472,
      -3.008944
    ]
  },
  {
    "id": 2510,
    "name": "Castle Crag",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Fellranger, Synge, and Tump",
    "height": "290m",
    "gridRef": "NY249159",
    "notes": "",
    "coords": [
      54.533181,
      -3.161612
    ]
  },
  {
    "id": 2483,
    "name": "Armboth Fell",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright",
    "height": "475m",
    "gridRef": "NY295157",
    "notes": "",
    "coords": [
      54.532026,
      -3.089702
    ]
  },
  {
    "id": 2445,
    "name": "Starling Dodd",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "633m",
    "gridRef": "NY142157",
    "notes": "",
    "coords": [
      54.529725,
      -3.327207
    ]
  },
  {
    "id": 2577,
    "name": "The Nab",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, Synge, and Tump",
    "height": "576m",
    "gridRef": "NY434151",
    "notes": "Wainwright and Birkett; ground 30m NE at NY 43440 15223 is lower",
    "coords": [
      54.528893,
      -2.875675
    ]
  },
  {
    "id": 2399,
    "name": "Red Pike (Buttermere)",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "755.3m",
    "gridRef": "NY160154",
    "notes": "cairn is at NY 16054 15453",
    "coords": [
      54.527438,
      -3.298545
    ]
  },
  {
    "id": 2400,
    "name": "Dale Head",
    "area": "North Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "753m",
    "gridRef": "NY222153",
    "notes": "ground at cairn (Wainwright/Birkett) at NY 22310 15330 is 30cm lower",
    "coords": [
      54.527238,
      -3.202284
    ]
  },
  {
    "id": 2515,
    "name": "Helvellyn",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Furth, Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Sim, County Top - Historic, Fellranger, Synge, and Tump",
    "height": "949.8m",
    "gridRef": "NY342151",
    "notes": "trig point is slightly lower",
    "coords": [
      54.527001,
      -3.017514
    ]
  },
  {
    "id": 2614,
    "name": "Arnison Crag",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and Tump",
    "height": "433m",
    "gridRef": "NY393149",
    "notes": "rock 3m S is highest point",
    "coords": [
      54.526364,
      -2.938524
    ]
  },
  {
    "id": 2579,
    "name": "Angletarn Pikes",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, Fellranger, Synge, and Tump",
    "height": "567m",
    "gridRef": "NY413148",
    "notes": "rock 30m to NE at NY 41354 14841 is just lower",
    "coords": [
      54.525312,
      -2.907984
    ]
  },
  {
    "id": 2491,
    "name": "Great Crag (Stonethwaite)",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and Tump",
    "height": "449m",
    "gridRef": "NY270146",
    "notes": "this is S top (Wainwright summit); top (two cairns) 80m N (Birkett) at NY 26998 14765 is 50cm lower",
    "coords": [
      54.522189,
      -3.129333
    ]
  },
  {
    "id": 3728,
    "name": "High Stile",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright and Birkett",
    "height": "806.2m",
    "gridRef": "NY167147",
    "notes": "30cm lower than hill 2381 270m ENE at NY 17009 14817",
    "coords": [
      54.521578,
      -3.287667
    ]
  },
  {
    "id": 2570,
    "name": "Birks",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Fellranger, Synge, and sub Sim",
    "height": "624m",
    "gridRef": "NY380143",
    "notes": "this is Nuttall/Subsimm/Birkett summit; cairn (Wainwright) 200m NE at NY 38179 14485 is lower",
    "coords": [
      54.520711,
      -2.959051
    ]
  },
  {
    "id": 2517,
    "name": "Nethermost Pike",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Fellranger, Synge, and sub Sim",
    "height": "891.3m",
    "gridRef": "NY343142",
    "notes": "Wainwright is small cairn at NY 34406 14157, cairn 20m NW is probably lower",
    "coords": [
      54.518993,
      -3.015446
    ]
  },
  {
    "id": 2476,
    "name": "Crag Fell",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, HuMP, Fellranger, Synge, and Tump",
    "height": "523m",
    "gridRef": "NY097143",
    "notes": "SE top 100m away at NY 09815 14330 is lower",
    "coords": [
      54.516717,
      -3.396073
    ]
  },
  {
    "id": 2438,
    "name": "Fleetwith Pike",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "648.9m",
    "gridRef": "NY205141",
    "notes": "higher ground may be hidden beneath the cairn",
    "coords": [
      54.516562,
      -3.22818
    ]
  },
  {
    "id": 2553,
    "name": "Rest Dodd",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "696m",
    "gridRef": "NY432136",
    "notes": "cairns 55m NNE at NY 43271 13701(Wainwright's cairn) & 80m NNW at NY 43237 13718 are lower",
    "coords": [
      54.514937,
      -2.878033
    ]
  },
  {
    "id": 2582,
    "name": "Brock Crags (Wainwright)",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "561.2m",
    "gridRef": "NY416136",
    "notes": "true summit is 230m E at NY 41904 13699",
    "coords": [
      54.514891,
      -2.902593
    ]
  },
  {
    "id": 2401,
    "name": "High Crag (Buttermere)",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "744.8m",
    "gridRef": "NY180139",
    "notes": "cairn to N is lower",
    "coords": [
      54.514628,
      -3.267412
    ]
  },
  {
    "id": 2482,
    "name": "Grike",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and Tump",
    "height": "488m",
    "gridRef": "NY084140",
    "notes": "cairn 10m W at NY 08491 14075 is lower; ground 100m E is lower",
    "coords": [
      54.513766,
      -3.41488
    ]
  },
  {
    "id": 2530,
    "name": "High Raise (High Street)",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "803.6m",
    "gridRef": "NY448134",
    "notes": "",
    "coords": [
      54.513367,
      -2.853779
    ]
  },
  {
    "id": 2527,
    "name": "St Sunday Crag",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "841.2m",
    "gridRef": "NY369133",
    "notes": "",
    "coords": [
      54.51194,
      -2.975836
    ]
  },
  {
    "id": 2524,
    "name": "Dollywaggon Pike",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "858.5m",
    "gridRef": "NY346130",
    "notes": "rock 7m W may be as high; cairn 30m SW at NY 34601 13046 is lower",
    "coords": [
      54.508693,
      -3.011175
    ]
  },
  {
    "id": 2532,
    "name": "Rampsgill Head",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "792.4m",
    "gridRef": "NY443128",
    "notes": "Wainwright's cairn is 145m SW at NY 44227 12772 and is 1m lower; rock 80m SW at NY 44293 12800 & ground 90m SW at NY 44276 12801 are both of similar height",
    "coords": [
      54.508092,
      -2.861252
    ]
  },
  {
    "id": 2457,
    "name": "Haystacks (Buttermere)",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, Fellranger, Synge, and Tump",
    "height": "597m",
    "gridRef": "NY193131",
    "notes": "this is the S cairn and is about 2m higher than N cairn 50m N at NY 19336 13204",
    "coords": [
      54.507243,
      -3.247321
    ]
  },
  {
    "id": 2544,
    "name": "The Knott (High Street)",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Synge, and deleted Nuttall",
    "height": "739m",
    "gridRef": "NY437126",
    "notes": "",
    "coords": [
      54.506316,
      -2.870821
    ]
  },
  {
    "id": 2536,
    "name": "Kidsty Pike",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Fellranger, and Synge",
    "height": "781m",
    "gridRef": "NY447125",
    "notes": "",
    "coords": [
      54.505513,
      -2.854959
    ]
  },
  {
    "id": 2424,
    "name": "Grey Knotts",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Fellranger, and Synge",
    "height": "697m",
    "gridRef": "NY217125",
    "notes": "outcrop 155m ENE at NY 21876 12581 is as high and OS bolt and cairn 45m NE of this at NY 21914 12615 is lower",
    "coords": [
      54.502362,
      -3.210186
    ]
  },
  {
    "id": 2467,
    "name": "Rosthwaite Fell - Bessyboot",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, Fellranger, Synge, and Tump",
    "height": "551m",
    "gridRef": "NY258124",
    "notes": "",
    "coords": [
      54.502198,
      -3.14685
    ]
  },
  {
    "id": 2412,
    "name": "Ullscarf",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "723m",
    "gridRef": "NY291121",
    "notes": "",
    "coords": [
      54.499914,
      -3.095534
    ]
  },
  {
    "id": 2578,
    "name": "Hartsop Above How",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, sub Dodd, Fellranger, and Synge",
    "height": "586.1m",
    "gridRef": "NY383120",
    "notes": "local topography fits Wainwright's sketch and knoll is several metres higher than any other top on ridge; embedded rock on knoll 240m away at NY 38540 12105 is probably Wainwright's NE summit",
    "coords": [
      54.499595,
      -2.953955
    ]
  },
  {
    "id": 2475,
    "name": "Eagle Crag",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, sub Dodd, Fellranger, and Synge",
    "height": "525m",
    "gridRef": "NY275121",
    "notes": "",
    "coords": [
      54.499056,
      -3.12048
    ]
  },
  {
    "id": 2572,
    "name": "Hartsop Dodd",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Fellranger, Synge, and sub Sim",
    "height": "619m",
    "gridRef": "NY411118",
    "notes": "fence post by wall (Wainwright summit) is 7m N of small cairn; larger cairn 35m NW at NY 41107 11874 is lower",
    "coords": [
      54.498538,
      -2.910448
    ]
  },
  {
    "id": 2368,
    "name": "Pillar",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "892.4m",
    "gridRef": "NY171121",
    "notes": "",
    "coords": [
      54.497479,
      -3.281134
    ]
  },
  {
    "id": 2552,
    "name": "Gray Crag",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and deleted Nuttall",
    "height": "698.1m",
    "gridRef": "NY427117",
    "notes": "this is Nuttall summit S of wall; Wainwright summit is N of wall at NY 42672 11869",
    "coords": [
      54.497466,
      -2.885363
    ]
  },
  {
    "id": 2521,
    "name": "Fairfield",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "873.3m",
    "gridRef": "NY358117",
    "notes": "rock 20m SW at NY 35861 11736 is 0.3m lower",
    "coords": [
      54.497054,
      -2.991648
    ]
  },
  {
    "id": 2416,
    "name": "Brandreth",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "715m",
    "gridRef": "NY214119",
    "notes": "Wainwright cairn 35m ENE at NY 21489 11928 and cairn 75m SE at NY 21518 11873 are both c 0.4m lower",
    "coords": [
      54.496479,
      -3.214274
    ]
  },
  {
    "id": 2545,
    "name": "Seat Sandal",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "736.8m",
    "gridRef": "NY344115",
    "notes": "30m ENE of cairn (Wainwright) at NY 34390 11515 and 40cm higher",
    "coords": [
      54.494857,
      -3.014027
    ]
  },
  {
    "id": 2471,
    "name": "Lank Rigg",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, HuMP, Fellranger, Synge, and Tump",
    "height": "541m",
    "gridRef": "NY091119",
    "notes": "cairn 3m S is lower; cairn 200m SW at NY 09024 11817 is several metres lower",
    "coords": [
      54.494811,
      -3.403973
    ]
  },
  {
    "id": 2379,
    "name": "Steeple",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Fellranger, Synge, and sub Sim",
    "height": "819m",
    "gridRef": "NY157116",
    "notes": "",
    "coords": [
      54.493389,
      -3.302174
    ]
  },
  {
    "id": 2563,
    "name": "Selside Pike",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "655m",
    "gridRef": "NY490111",
    "notes": "windshelter (Wainwright & Birkett) is at NY 49073 11186 and is 75cm lower",
    "coords": [
      54.49308,
      -2.787925
    ]
  },
  {
    "id": 2529,
    "name": "Hart Crag",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "823.1m",
    "gridRef": "NY368112",
    "notes": "rock near Wainwright cairn 100m SE at NY 36891 11207 is as high",
    "coords": [
      54.492752,
      -2.976954
    ]
  },
  {
    "id": 2439,
    "name": "Base Brown",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "646m",
    "gridRef": "NY225114",
    "notes": "",
    "coords": [
      54.492581,
      -3.197762
    ]
  },
  {
    "id": 2463,
    "name": "Sergeant's Crag",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, Fellranger, Synge, and Tump",
    "height": "571m",
    "gridRef": "NY273113",
    "notes": "",
    "coords": [
      54.492531,
      -3.122463
    ]
  },
  {
    "id": 2528,
    "name": "High Street",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "828m",
    "gridRef": "NY440110",
    "notes": "",
    "coords": [
      54.491691,
      -2.86486
    ]
  },
  {
    "id": 2466,
    "name": "Steel Fell",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, Fellranger, Synge, and Tump",
    "height": "553m",
    "gridRef": "NY319111",
    "notes": "cairn 80m E at NY 32023 11167 is 2m lower",
    "coords": [
      54.49115,
      -3.052179
    ]
  },
  {
    "id": 2373,
    "name": "Scoat Fell",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "841m",
    "gridRef": "NY159113",
    "notes": "",
    "coords": [
      54.490904,
      -3.299224
    ]
  },
  {
    "id": 2589,
    "name": "High Hartsop Dodd",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "519m",
    "gridRef": "NY393107",
    "notes": "",
    "coords": [
      54.488623,
      -2.937691
    ]
  },
  {
    "id": 2425,
    "name": "Caw Fell",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Fellranger, Synge, and sub Sim",
    "height": "697m",
    "gridRef": "NY132109",
    "notes": "cairn is Wainwright and Birkett summit",
    "coords": [
      54.486868,
      -3.341256
    ]
  },
  {
    "id": 2384,
    "name": "Green Gable",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "801m",
    "gridRef": "NY214107",
    "notes": "",
    "coords": [
      54.485699,
      -3.213769
    ]
  },
  {
    "id": 2533,
    "name": "Dove Crag",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "792m",
    "gridRef": "NY374104",
    "notes": "rock 15m N at NY 37458 10451 is slightly higher than edge of cairn but higher ground may exist under cairn",
    "coords": [
      54.4854,
      -2.96693
    ]
  },
  {
    "id": 2539,
    "name": "Great Rigg",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "766.4m",
    "gridRef": "NY355104",
    "notes": "cairn (NY 35584 10395) is Wainwright",
    "coords": [
      54.484906,
      -2.995692
    ]
  },
  {
    "id": 2385,
    "name": "Haycock",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, sub HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "797m",
    "gridRef": "NY144107",
    "notes": "Wainwright claims windshelter on N side of wall (NY 14475 10726) is marginally higher",
    "coords": [
      54.484568,
      -3.321576
    ]
  },
  {
    "id": 2472,
    "name": "Calf Crag",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, Fellranger, Synge, and Tump",
    "height": "537m",
    "gridRef": "NY301104",
    "notes": "",
    "coords": [
      54.484231,
      -3.079493
    ]
  },
  {
    "id": 2378,
    "name": "Red Pike (Wasdale)",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "826m",
    "gridRef": "NY165106",
    "notes": "",
    "coords": [
      54.483922,
      -3.289879
    ]
  },
  {
    "id": 2389,
    "name": "Glaramara",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "783m",
    "gridRef": "NY245104",
    "notes": "Nuttall summit; Wainwright summit (cairn) 160m NE at NY 24722 10561 and cairn 55m W are lower",
    "coords": [
      54.483839,
      -3.165338
    ]
  },
  {
    "id": 2541,
    "name": "Mardale Ill Bell",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and deleted Nuttall",
    "height": "760m",
    "gridRef": "NY447101",
    "notes": "",
    "coords": [
      54.483418,
      -2.854112
    ]
  },
  {
    "id": 2383,
    "name": "Kirk Fell",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "802m",
    "gridRef": "NY194104",
    "notes": "",
    "coords": [
      54.483323,
      -3.244123
    ]
  },
  {
    "id": 2550,
    "name": "Branstree",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "711.5m",
    "gridRef": "NY477100",
    "notes": "circular trig station 40m SE at NY 47795 09971 is 0.25m lower",
    "coords": [
      54.482669,
      -2.807575
    ]
  },
  {
    "id": 2535,
    "name": "Thornthwaite Crag",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "784m",
    "gridRef": "NY431100",
    "notes": "beacon (Wainwright/Birkett) 45m S at NY 43138 10008 is lower. Ground in wall 10m W is of similar height",
    "coords": [
      54.482611,
      -2.878976
    ]
  },
  {
    "id": 2367,
    "name": "Great Gable",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "899m",
    "gridRef": "NY211103",
    "notes": "",
    "coords": [
      54.482084,
      -3.219296
    ]
  },
  {
    "id": 2540,
    "name": "Stony Cove Pike",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "763.7m",
    "gridRef": "NY417100",
    "notes": "rock is about 1m higher than Wainwright cairn 90m E at NY 41867 09997; there are several cairns in the summit area",
    "coords": [
      54.48206,
      -2.90008
    ]
  },
  {
    "id": 2566,
    "name": "Little Hart Crag",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "637m",
    "gridRef": "NY387100",
    "notes": "ground 120m ENE at NY 38853 10053 and 20m NW at NY 38722 10047 is lower",
    "coords": [
      54.481916,
      -2.947169
    ]
  },
  {
    "id": 2494,
    "name": "Gibson Knott",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "420.1m",
    "gridRef": "NY316100",
    "notes": "Fellranger summit is the cairn 200m SE at NY 31853 09923 and is 2m higher",
    "coords": [
      54.48107,
      -3.055825
    ]
  },
  {
    "id": 2456,
    "name": "Seathwaite Fell (Wainwright summit)",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "601.1m",
    "gridRef": "NY229101",
    "notes": "Wainwright summit cairn is 16m NW at NY 22903 10180",
    "coords": [
      54.480998,
      -3.191249
    ]
  },
  {
    "id": 2564,
    "name": "Middle Dodd",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "654m",
    "gridRef": "NY397095",
    "notes": "nearby rock is higher than cairn base; ground to S is lower",
    "coords": [
      54.477939,
      -2.931566
    ]
  },
  {
    "id": 2537,
    "name": "Harter Fell (Mardale)",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, sub Marilyn, Fellranger, Synge, Sim, and Tump",
    "height": "779m",
    "gridRef": "NY459093",
    "notes": "cairn is built on largely hidden small outcrop of rock",
    "coords": [
      54.476414,
      -2.835323
    ]
  },
  {
    "id": 2396,
    "name": "High Raise",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "762m",
    "gridRef": "NY280095",
    "notes": "rock 30cm higher than flush bracket; windshelter conceal higher rock",
    "coords": [
      54.475962,
      -3.111268
    ]
  },
  {
    "id": 2498,
    "name": "Helm Crag",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and Tump",
    "height": "405m",
    "gridRef": "NY326093",
    "notes": "",
    "coords": [
      54.475026,
      -3.040823
    ]
  },
  {
    "id": 2468,
    "name": "Tarn Crag (Easedale)",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "549m",
    "gridRef": "NY303093",
    "notes": "cairn is Wainwright and Birkett; it is c 3m lower than highest point of fell 100m WNW at NY 30277 09335",
    "coords": [
      54.474295,
      -3.076006
    ]
  },
  {
    "id": 2601,
    "name": "Stone Arthur",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "504m",
    "gridRef": "NY347092",
    "notes": "ground 25m N at NY 34774 09250 is at least as high",
    "coords": [
      54.474276,
      -3.008366
    ]
  },
  {
    "id": 2562,
    "name": "High Pike (Scandale)",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "656m",
    "gridRef": "NY374088",
    "notes": "Wainwright summit; highest point on E side of wall but note ground 25m to W (NY 37420 08821) on other side of wall is as high",
    "coords": [
      54.470976,
      -2.966791
    ]
  },
  {
    "id": 2538,
    "name": "Red Screes",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "776m",
    "gridRef": "NY396087",
    "notes": "trig point is at NY 39650 08771; rock 13m NW is 5cm lower",
    "coords": [
      54.470589,
      -2.932572
    ]
  },
  {
    "id": 2407,
    "name": "Sergeant Man",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and deleted Nuttall",
    "height": "736m",
    "gridRef": "NY286088",
    "notes": "",
    "coords": [
      54.470362,
      -3.102552
    ]
  },
  {
    "id": 2548,
    "name": "Froswick",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "720m",
    "gridRef": "NY435085",
    "notes": "",
    "coords": [
      54.468949,
      -2.872974
    ]
  },
  {
    "id": 2388,
    "name": "Allen Crags",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "785m",
    "gridRef": "NY236085",
    "notes": "",
    "coords": [
      54.466367,
      -3.179175
    ]
  },
  {
    "id": 2573,
    "name": "Heron Pike (Rydal)",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Synge, and sub Sim",
    "height": "612m",
    "gridRef": "NY355083",
    "notes": "cairn has been destroyed",
    "coords": [
      54.466072,
      -2.995142
    ]
  },
  {
    "id": 2364,
    "name": "Great End",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "909.5m",
    "gridRef": "NY226083",
    "notes": "cairn 160m W at NY 22532 08465 is c 1m lower",
    "coords": [
      54.46494,
      -3.194548
    ]
  },
  {
    "id": 2450,
    "name": "Yewbarrow",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, sub Marilyn, Fellranger, Synge, Sim, and Tump",
    "height": "628.7m",
    "gridRef": "NY173084",
    "notes": "",
    "coords": [
      54.464889,
      -3.27686
    ]
  },
  {
    "id": 2427,
    "name": "Seatallan",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "692m",
    "gridRef": "NY140084",
    "notes": "summit is 55m NE of trig point (NY 13963 08402) and 15m SSW of small cairn (NY 14008 08455)",
    "coords": [
      54.464065,
      -3.328274
    ]
  },
  {
    "id": 2559,
    "name": "Tarn Crag (Sleddale)",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "664m",
    "gridRef": "NY488078",
    "notes": "cairn is NE of pillar (NY 48784 07802); pointed rock on grassy rise 60m WNW at NY 48786 07863 is of equal height",
    "coords": [
      54.463458,
      -2.790658
    ]
  },
  {
    "id": 2382,
    "name": "Lingmell",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "807m",
    "gridRef": "NY209081",
    "notes": "finger of rock on N top is at least as high",
    "coords": [
      54.462803,
      -3.2213
    ]
  },
  {
    "id": 2546,
    "name": "Kentmere Pike",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "730.5m",
    "gridRef": "NY465077",
    "notes": "trig point is 3m E of wall; cairn 3m W of wall is lower; other outcrops in summit area are all lower",
    "coords": [
      54.462682,
      -2.826034
    ]
  },
  {
    "id": 2413,
    "name": "Thunacar Knott",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Fellranger, Synge, and sub Sim",
    "height": "723m",
    "gridRef": "NY279079",
    "notes": "Wainwright summit is mound 50m north of tarn NY 27925 08144",
    "coords": [
      54.462189,
      -3.112653
    ]
  },
  {
    "id": 2596,
    "name": "Low Pike",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "508m",
    "gridRef": "NY373078",
    "notes": "",
    "coords": [
      54.462069,
      -2.967985
    ]
  },
  {
    "id": 2542,
    "name": "Ill Bell",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "757m",
    "gridRef": "NY436077",
    "notes": "S cairn at NY 43660 07720 is c 50cm lower",
    "coords": [
      54.462017,
      -2.870837
    ]
  },
  {
    "id": 2423,
    "name": "Pavey Ark",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Fellranger, and Synge",
    "height": "700m",
    "gridRef": "NY284079",
    "notes": "",
    "coords": [
      54.461494,
      -3.105214
    ]
  },
  {
    "id": 2470,
    "name": "Blea Rigg",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "541m",
    "gridRef": "NY301078",
    "notes": "Wainwright summit; rocky knoll 80m WSW at NY 30079 07807 is c 3m higher",
    "coords": [
      54.461076,
      -3.078806
    ]
  },
  {
    "id": 2437,
    "name": "Rossett Pike",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "651m",
    "gridRef": "NY249075",
    "notes": "",
    "coords": [
      54.457935,
      -3.159804
    ]
  },
  {
    "id": 2565,
    "name": "Grey Crag",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "638m",
    "gridRef": "NY497072",
    "notes": "outcrop is 40m N of Wainwright cairn (NY 49713 07177) and c 1.7m higher",
    "coords": [
      54.457874,
      -2.777191
    ]
  },
  {
    "id": 2369,
    "name": "Esk Pike",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "885m",
    "gridRef": "NY236075",
    "notes": "rib of rock 4mNE is as high; large cairn 30m NE at NY 23671 07527 is lower",
    "coords": [
      54.457172,
      -3.179219
    ]
  },
  {
    "id": 2406,
    "name": "Harrison Stickle",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "736m",
    "gridRef": "NY281074",
    "notes": "",
    "coords": [
      54.456898,
      -3.109455
    ]
  },
  {
    "id": 2611,
    "name": "Nab Scar",
    "area": "Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "450m",
    "gridRef": "NY355072",
    "notes": "",
    "coords": [
      54.456414,
      -2.995849
    ]
  },
  {
    "id": 2417,
    "name": "Pike of Stickle",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "708.4m",
    "gridRef": "NY273073",
    "notes": "",
    "coords": [
      54.456393,
      -3.121381
    ]
  },
  {
    "id": 2430,
    "name": "Loft Crag",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Fellranger, Synge, and sub Sim",
    "height": "681.7m",
    "gridRef": "NY277071",
    "notes": "",
    "coords": [
      54.454429,
      -3.115991
    ]
  },
  {
    "id": 2359,
    "name": "Scafell Pike",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Furth, Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, County Top - Administrative, County Top - Historic, County Top - Current County and Unitary Authority, and Tump",
    "height": "978.07m",
    "gridRef": "NY215072",
    "notes": "",
    "coords": [
      54.454263,
      -3.211682
    ]
  },
  {
    "id": 2459,
    "name": "Middle Fell",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, HuMP, Fellranger, Synge, and Tump",
    "height": "582m",
    "gridRef": "NY150072",
    "notes": "",
    "coords": [
      54.453249,
      -3.311327
    ]
  },
  {
    "id": 2551,
    "name": "Yoke",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "707m",
    "gridRef": "NY437067",
    "notes": "",
    "coords": [
      54.452928,
      -2.868731
    ]
  },
  {
    "id": 2499,
    "name": "Silver How",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "393.8m",
    "gridRef": "NY324066",
    "notes": "ground 5m NW is of similar height",
    "coords": [
      54.450687,
      -3.04289
    ]
  },
  {
    "id": 2626,
    "name": "Troutbeck Tongue",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and Tump",
    "height": "364m",
    "gridRef": "NY422064",
    "notes": "knoll is 40m N of cairn (NY 42233 06386) and 2m higher; cairn is Birkett and Wainwright summit",
    "coords": [
      54.449952,
      -2.892312
    ]
  },
  {
    "id": 2574,
    "name": "Shipman Knotts",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "587m",
    "gridRef": "NY472062",
    "notes": "small cairn by wall 90m N at NY 47254 06306 (Birkett) is c 40cm lower; rock 3m W of wall is c 30cm lower",
    "coords": [
      54.448577,
      -2.814707
    ]
  },
  {
    "id": 2365,
    "name": "Bowfell",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, sub Marilyn, Fellranger, Synge, Sim, and Tump",
    "height": "902.9m",
    "gridRef": "NY244064",
    "notes": "",
    "coords": [
      54.447816,
      -3.166242
    ]
  },
  {
    "id": 2360,
    "name": "Scafell",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Furth, Wainwright, Birkett, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "963.9m",
    "gridRef": "NY206064",
    "notes": "",
    "coords": [
      54.447498,
      -3.224731
    ]
  },
  {
    "id": 2497,
    "name": "Buckbarrow",
    "area": "Western Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, and Synge",
    "height": "423m",
    "gridRef": "NY135061",
    "notes": "",
    "coords": [
      54.443165,
      -3.334275
    ]
  },
  {
    "id": 2607,
    "name": "Baystones",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, HuMP, sub Marilyn, Fellranger, and Tump",
    "height": "486.9m",
    "gridRef": "NY403051",
    "notes": "mound 130m NE at NY 40355 05275 is 0.83m lower and is Hill 3838, the 487m spot height on 1:50000 map",
    "coords": [
      54.438194,
      -2.921751
    ]
  },
  {
    "id": 2507,
    "name": "Loughrigg Fell",
    "area": "Central Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, HuMP, Fellranger, Synge, and Tump",
    "height": "335m",
    "gridRef": "NY346051",
    "notes": "",
    "coords": [
      54.437454,
      -3.008355
    ]
  },
  {
    "id": 2397,
    "name": "Slight Side",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Fellranger, Synge, and deleted Nuttall",
    "height": "762m",
    "gridRef": "NY209050",
    "notes": "tor 40m NW at NY 20970 05030 is 30cm lower",
    "coords": [
      54.434392,
      -3.219575
    ]
  },
  {
    "id": 2371,
    "name": "Crinkle Crags - Long Top",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "859m",
    "gridRef": "NY248048",
    "notes": "North cairn is higher than South cairn",
    "coords": [
      54.433704,
      -3.159813
    ]
  },
  {
    "id": 2454,
    "name": "Illgill Head",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Dewey, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "608.8m",
    "gridRef": "NY168049",
    "notes": "higher by 0.5m than rock by windshelter at NY16905 05025; rock 30m SW at NY 16874 04908 is 0.04m lower",
    "coords": [
      54.43293,
      -3.282634
    ]
  },
  {
    "id": 2485,
    "name": "Lingmoor Fell",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, HuMP, Fellranger, Synge, and Tump",
    "height": "470m",
    "gridRef": "NY302046",
    "notes": "",
    "coords": [
      54.432067,
      -3.07641
    ]
  },
  {
    "id": 2590,
    "name": "Sallows",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, Fellranger, Synge, and Tump",
    "height": "516m",
    "gridRef": "NY436039",
    "notes": "",
    "coords": [
      54.428122,
      -2.869995
    ]
  },
  {
    "id": 2419,
    "name": "Pike of Blisco",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "705m",
    "gridRef": "NY271042",
    "notes": "North cairn is higher than South cairn",
    "coords": [
      54.428111,
      -3.124925
    ]
  },
  {
    "id": 2422,
    "name": "Cold Pike",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "700.1m",
    "gridRef": "NY262036",
    "notes": "",
    "coords": [
      54.4226,
      -3.137582
    ]
  },
  {
    "id": 2609,
    "name": "Sour Howes",
    "area": "Far Eastern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Synge, and Tump",
    "height": "483m",
    "gridRef": "NY427032",
    "notes": "Wainwright's summit is probably shaly ridge 60m ESE NY 42832 03198; Wainwright's sketch map may be misleading as it indicates summit is further SW where ground is obviously lower",
    "coords": [
      54.421166,
      -2.883595
    ]
  },
  {
    "id": 2473,
    "name": "Whin Rigg (Wasdale)",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Dodd, Dewey, Fellranger, Synge, and Tump",
    "height": "537m",
    "gridRef": "NY151035",
    "notes": "rock 3m E of cairn is highest point of fell; cairn 100m SSE on S top at NY 15138 03442 is about 1m lower; rock 100m SSE on S top at NY 15148 03435 is about 0.7m lower",
    "coords": [
      54.420162,
      -3.309916
    ]
  },
  {
    "id": 2469,
    "name": "Hard Knott",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Dodd, Dewey, HuMP, Fellranger, Synge, and Tump",
    "height": "549m",
    "gridRef": "NY231023",
    "notes": "top 200m SW is lower",
    "coords": [
      54.411026,
      -3.185029
    ]
  },
  {
    "id": 2508,
    "name": "Black Fell",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, HuMP, Fellranger, Synge, and Tump",
    "height": "323m",
    "gridRef": "NY340015",
    "notes": "rock 55m N of trig point (NY 34041 01641) is as high",
    "coords": [
      54.405503,
      -3.017955
    ]
  },
  {
    "id": 2640,
    "name": "Wetherlam",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, sub Marilyn, Fellranger, Synge, Sim, and Tump",
    "height": "763m",
    "gridRef": "NY288011",
    "notes": "",
    "coords": [
      54.400488,
      -3.097966
    ]
  },
  {
    "id": 2637,
    "name": "Great Carrs",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Fellranger, Synge, and sub Sim",
    "height": "785m",
    "gridRef": "NY270009",
    "notes": "",
    "coords": [
      54.398777,
      -3.124738
    ]
  },
  {
    "id": 2673,
    "name": "Holme Fell",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, HuMP, Fellranger, Synge, and Tump",
    "height": "316m",
    "gridRef": "NY315006",
    "notes": "cairn on large rock outcrop (Birkett) 60m NNE at NY 31531 00657 is 0.5m lower; rock outcrop 110m NNE at NY 31557 00699 is 0.3m lower",
    "coords": [
      54.396301,
      -3.056527
    ]
  },
  {
    "id": 2635,
    "name": "Swirl How",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "802.4m",
    "gridRef": "NY272005",
    "notes": "",
    "coords": [
      54.395257,
      -3.121515
    ]
  },
  {
    "id": 2639,
    "name": "Grey Friar",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, Fellranger, Synge, Sim, and Tump",
    "height": "773m",
    "gridRef": "NY260003",
    "notes": "cairn 40m NW at NY 25989 00396 is about 50cm lower",
    "coords": [
      54.393339,
      -3.141054
    ]
  },
  {
    "id": 2643,
    "name": "Harter Fell (Eskdale)",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "653.2m",
    "gridRef": "SD218997",
    "notes": "rock tor 20m ENE is 1.6m lower",
    "coords": [
      54.386916,
      -3.204523
    ]
  },
  {
    "id": 2636,
    "name": "Brim Fell",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Nuttall, Fellranger, and Synge",
    "height": "795.9m",
    "gridRef": "SD270985",
    "notes": "",
    "coords": [
      54.377283,
      -3.124197
    ]
  },
  {
    "id": 2655,
    "name": "Green Crag",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, HuMP, sub Marilyn, Fellranger, Synge, and Tump",
    "height": "488.7m",
    "gridRef": "SD200982",
    "notes": "rib of rock 25m NE of summit at SD 20032 98292 is 2cm lower",
    "coords": [
      54.373706,
      -3.232832
    ]
  },
  {
    "id": 2634,
    "name": "The Old Man of Coniston",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Marilyn, Hewitt, Nuttall, HuMP, County Top - Historic, Fellranger, Synge, Sim, and Tump",
    "height": "802.4m",
    "gridRef": "SD272978",
    "notes": "",
    "coords": [
      54.370658,
      -3.121445
    ]
  },
  {
    "id": 2638,
    "name": "Dow Crag",
    "area": "Southern Fells",
    "county": "Cumbria",
    "country": "England",
    "classification": "Wainwright, Birkett, Hewitt, Nuttall, HuMP, Fellranger, Synge, Sim, and Tump",
    "height": "778m",
    "gridRef": "SD262977",
    "notes": "",
    "coords": [
      54.3703,
      -3.136659
    ]
  }
]

const recordFromList = <Item>(list: Item[], getId: (item: Item) => string): Record<string, Item> => {
  const record: Record<string, Item> = {}
  list.forEach((item) => {
    record[getId(item)] = item
  })
  return record
}

const wainwrightRecord = recordFromList(wainwrightList, (item) => String(item.id))

export { wainwrightSourceList, wainwrightList, wainwrightRecord }
export type { Wainwright }
