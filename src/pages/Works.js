import React from "react";
import WorkList from "./../components/WorkList";
import Sidebar from "./../components/Sidebar";
import { Spring } from "react-spring/renderprops";

class Works extends React.Component {
  state = {
    workProject: [
      {
        workID: 1,
        workName: "Kristiseth.com",
        workLink: "http://www.kristiseth.com/",
      },
      {
        workID: 2,
        workName: "Byronweston.com",
        workLink: "http://byronweston.com/",
      },
      {
        workID: 3,
        workName: "Terrischeid.com",
        workLink: "http://www.terrischeid.com/",
      },
      {
        workID: 4,
        workName: "Hrgaustin.com",
        workLink: "http://www.hrgaustin.com/",
      },
      {
        workID: 5,
        workName: "Homeatlastrealty.com",
        workLink: "http://www.homeatlastrealty.com/",
      },
      {
        workID: 6,
        workName: "Thebettsrealtygroup.com",
        workLink: "http://thebettsrealtygroup.com/",
      },
      {
        workID: 7,
        workName: "Homesbymara.com",
        workLink: "http://www.homesbymara.com/",
      },
      {
        workID: 8,
        workName: "Schembrarealestategroup.com",
        workLink: "https://www.schembrarealestategroup.com/",
      },
      {
        workID: 9,
        workName: "Backtothecountry.Net",
        workLink: "http://www.backtothecountry.net/",
      },
      {
        workID: 10,
        workName: "Jaxhistoricrealty.com",
        workLink: "http://jaxhistoricrealty.com/",
      },
      {
        workID: 11,
        workName: "Shaunafogal.com",
        workLink: "http://www.shaunafogal.com/",
      },
      {
        workID: 12,
        workName: "Marypong.com",
        workLink: "http://www.marypong.com/",
      },
      {
        workID: 13,
        workName: "Hudsonvalleyrealtycenter.com",
        workLink: "http://hudsonvalleyrealtycenter.com/",
      },
      {
        workID: 14,
        workName: "Anitawheelerrealtor.com",
        workLink: "http://www.anitawheelerrealtor.com/",
      },
      {
        workID: 15,
        workName: "Bethtraversogroup.com",
        workLink: "http://www.bethtraversogroup.com/",
      },
      {
        workID: 16,
        workName: "Thecondolife.com",
        workLink: "https://thecondolife.com/",
      },
      {
        workID: 17,
        workName: "Thekimberlylowegroup.com",
        workLink: "http://thekimberlylowegroup.com/",
      },
      {
        workID: 18,
        workName: "Threelagoons.com",
        workLink: "http://www.threelagoons.com/",
      },
      {
        workID: 19,
        workName: "Hudvalleyhomes.com",
        workLink: "https://hudvalleyhomes.com/",
      },
      {
        workID: 20,
        workName: "Teamhawke.com",
        workLink: "http://www.teamhawke.com/",
      },
      {
        workID: 21,
        workName: "Joditicknor.com",
        workLink: "http://www.joditicknor.com/",
      },
      {
        workID: 22,
        workName: "Valleyluxurypartners.com",
        workLink: "http://valleyluxurypartners.com/",
      },
      {
        workID: 23,
        workName: "Palmspringsfinesthomes.com",
        workLink: "http://www.palmspringsfinesthomes.com/",
      },
      {
        workID: 24,
        workName: "Dallien.com",
        workLink: "https://www.dallien.com/",
      },
      {
        workID: 25,
        workName: "Natashakattau.com",
        workLink: "http://www.natashakattau.com/",
      },
      {
        workID: 26,
        workName: "Jackiezehlandteresalewis.com",
        workLink: "http://www.jackiezehlandteresalewis.com/",
      },
      {
        workID: 27,
        workName: "Castlesbythebeach.com",
        workLink: "http://castlesbythebeach.com/",
      },
      {
        workID: 28,
        workName: "Baynorthrealty.com",
        workLink: "http://www.baynorthrealty.com/",
      },
      {
        workID: 29,
        workName: "Capitalkeyproperties.com",
        workLink: "http://www.capitalkeyproperties.com/",
      },
      {
        workID: 30,
        workName: "Sallydrealtor.com",
        workLink: "http://sallydrealtor.com/",
      },
      {
        workID: 31,
        workName: "Ninakurtz.com",
        workLink: "http://www.ninakurtz.com/",
      },
      {
        workID: 32,
        workName: "Bakerrealtytx.com",
        workLink: "http://bakerrealtytx.com/",
      },
      {
        workID: 33,
        workName: "Sellingwesthollywood.com",
        workLink: "http://sellingwesthollywood.com/",
      },
      {
        workID: 34,
        workName: "Selectrealtycolorado.com",
        workLink: "http://www.selectrealtycolorado.com/",
      },
      {
        workID: 35,
        workName: "Redbowrealtyusa.com",
        workLink: "http://redbowrealtyusa.com/",
      },
      {
        workID: 36,
        workName: "Wesellhousesla.com",
        workLink: "http://www.wesellhousesla.com/",
      },
      {
        workID: 37,
        workName: "Sellhomescloseloans.com",
        workLink: "https://www.sellhomescloseloans.com/",
      },
      {
        workID: 38,
        workName: "Amandasergeant.com",
        workLink: "https://amandasergeant.com/",
      },
      {
        workID: 39,
        workName: "Teamsurlis.com",
        workLink: "http://www.teamsurlis.com/",
      },
      {
        workID: 40,
        workName: "Talkingrocksales.com",
        workLink: "http://talkingrocksales.com/",
      },
      {
        workID: 41,
        workName: "Loridepucci.com",
        workLink: "http://www.loridepucci.com/",
      },
      {
        workID: 42,
        workName: "Bevhowardrealestate.com",
        workLink: "http://www.bevhowardrealestate.com/",
      },
      {
        workID: 43,
        workName: "Glenwoodhomes.com",
        workLink: "http://glenwoodhomes.com/",
      },
      {
        workID: 44,
        workName: "Alantaylorrealestate.com",
        workLink: "http://www.alantaylorrealestate.com/",
      },
      {
        workID: 45,
        workName: "Greatparkareaspecialist.com",
        workLink: "https://www.greatparkareaspecialist.com/",
      },
      {
        workID: 46,
        workName: "Gregfulfordsf.com",
        workLink: "http://www.gregfulfordsf.com/",
      },
      {
        workID: 47,
        workName: "Idealpropertiesre.com",
        workLink: "http://idealpropertiesre.com/",
      },
      {
        workID: 48,
        workName: "Larealestateconnection.com",
        workLink: "http://www.larealestateconnection.com/",
      },
      {
        workID: 49,
        workName: "Seasiderealtyvc.com",
        workLink: "http://www.seasiderealtyvc.com/",
      },
      {
        workID: 50,
        workName: "Laurasrealestategroup.com",
        workLink: "http://www.laurasrealestategroup.com/",
      },
      {
        workID: 51,
        workName: "Chongmillergroup.com",
        workLink: "https://chongmillergroup.com/",
      },
      {
        workID: 52,
        workName: "Realestatenewheightstexas.com",
        workLink: "http://www.realestatenewheightstexas.com/",
      },
      {
        workID: 53,
        workName: "Davidkelsey.com",
        workLink: "http://davidkelsey.com/",
      },
      {
        workID: 54,
        workName: "Adamwithhudson.com",
        workLink: "http://www.adamwithhudson.com/",
      },
      {
        workID: 55,
        workName: "Chadgsellshomes.com",
        workLink: "http://www.chadgsellshomes.com/",
      },
      {
        workID: 56,
        workName: "Marthabick.com",
        workLink: "http://marthabick.com/",
      },
      {
        workID: 57,
        workName: "Bobbymoreno.com",
        workLink: "http://bobbymoreno.com/",
      },
      {
        workID: 58,
        workName: "Adventurerealty-Tn.com",
        workLink: "https://adventurerealty-tn.com/",
      },
      {
        workID: 59,
        workName: "Jarhouse.com",
        workLink: "https://jarhouse.com/",
      },
      {
        workID: 60,
        workName: "Teamkgrealty.com",
        workLink: "http://teamkgrealty.com/",
      },
      {
        workID: 61,
        workName: "Finesthomesstl.com",
        workLink: "http://finesthomesstl.com/",
      },
      {
        workID: 62,
        workName: "Bobburkejacksonville.com",
        workLink: "http://www.bobburkejacksonville.com/",
      },
      {
        workID: 63,
        workName: "Stacyesser.com",
        workLink: "https://www.stacyesser.com/",
      },
      {
        workID: 64,
        workName: "Rnlrealestateinvestments.com",
        workLink: "http://www.rnlrealestateinvestments.com/",
      },
      {
        workID: 65,
        workName: "Ybrsrealty.com",
        workLink: "http://ybrsrealty.com/",
      },
      {
        workID: 66,
        workName: "Thepearlgates.com",
        workLink: "http://thepearlgates.com/",
      },
      {
        workID: 67,
        workName: "Larrywilliamsrealtor.com",
        workLink: "http://larrywilliamsrealtor.com/",
      },
      {
        workID: 68,
        workName: "Arrowheadmountainhomes.com",
        workLink: "http://www.arrowheadmountainhomes.com/",
      },
      {
        workID: 69,
        workName: "Soldbydano.com",
        workLink: "http://soldbydano.com/",
      },
      {
        workID: 70,
        workName: "Nextnestrealestate.com",
        workLink: "http://www.nextnestrealestate.com/",
      },
      {
        workID: 71,
        workName: "Ryandallasre.com",
        workLink: "http://ryandallasre.com/",
      },
      {
        workID: 72,
        workName: "Sandiegopropertysearch.com",
        workLink: "https://www.sandiegopropertysearch.com/",
      },
      {
        workID: 73,
        workName: "Thelma4Harborhomes.com",
        workLink: "http://www.thelma4harborhomes.com/",
      },
      {
        workID: 74,
        workName: "Pattyrosscarmel.com",
        workLink: "http://www.pattyrosscarmel.com/",
      },
      {
        workID: 75,
        workName: "Landmarkpropertiesfl.com",
        workLink: "http://www.landmarkpropertiesfl.com/",
      },
      {
        workID: 76,
        workName: "Amberhatleyre.com",
        workLink: "http://www.amberhatleyre.com/",
      },
      {
        workID: 77,
        workName: "Barcodeproperties.com",
        workLink: "http://www.barcodeproperties.com/",
      },
      {
        workID: 78,
        workName: "Mariafabianorealty.com",
        workLink: "https://mariafabianorealty.com/",
      },
      {
        workID: 79,
        workName: "Michelepompa.com",
        workLink: "http://michelepompa.com/",
      },
      {
        workID: 80,
        workName: "Brandon-Patton.com",
        workLink: "https://brandon-patton.com/",
      },
      {
        workID: 81,
        workName: "Williamsluxuryhomes.com",
        workLink: "https://williamsluxuryhomes.com/",
      },
      {
        workID: 82,
        workName: "Thecorradogroup.com",
        workLink: "http://www.thecorradogroup.com/",
      },
      {
        workID: 83,
        workName: "Lampertrealestate.com",
        workLink: "http://lampertrealestate.com/",
      },
      {
        workID: 84,
        workName: "Alexandraperryproperties.com",
        workLink: "https://www.alexandraperryproperties.com/",
      },
      {
        workID: 85,
        workName: "Heritagetexascountry.com",
        workLink: "https://www.heritagetexascountry.com/",
      },
      {
        workID: 86,
        workName: "Andreakorchek.com",
        workLink: "http://www.andreakorchek.com/",
      },
      { workID: 87, workName: "Ogroup.com", workLink: "https://ogroup.com/" },
      {
        workID: 88,
        workName: "Crestedbuttenow.com",
        workLink: "http://crestedbuttenow.com/",
      },
      {
        workID: 89,
        workName: "Imanirealestategroup.com",
        workLink: "https://www.imanirealestategroup.com/",
      },
      {
        workID: 90,
        workName: "Pushpa4Homes.com",
        workLink: "http://pushpa4homes.com/",
      },
      {
        workID: 91,
        workName: "Debraajohnston.com",
        workLink: "https://debraajohnston.com/",
      },
      {
        workID: 92,
        workName: "Pooleproperties.com",
        workLink: "http://www.pooleproperties.com/",
      },
      {
        workID: 93,
        workName: "Smithmountainrealty.com",
        workLink: "http://www.smithmountainrealty.com/",
      },
      {
        workID: 94,
        workName: "Bhhscaliber.com",
        workLink: "https://bhhscaliber.com/",
      },
      {
        workID: 95,
        workName: "Cremgroupre.com",
        workLink: "https://cremgroupre.com/",
      },
      {
        workID: 96,
        workName: "Tamaracomer.com",
        workLink: "http://www.tamaracomer.com/",
      },
      {
        workID: 97,
        workName: "Leadingvegas.com",
        workLink: "http://leadingvegas.com/",
      },
      {
        workID: 98,
        workName: "Sunivia.com",
        workLink: "https://www.sunivia.com/",
      },
      {
        workID: 99,
        workName: "Bobssandiegohomes.com",
        workLink: "http://www.bobssandiegohomes.com/",
      },
      {
        workID: 100,
        workName: "Cherylcorealestate.com",
        workLink: "http://cherylcorealestate.com/",
      },
      {
        workID: 101,
        workName: "Yamanci.com",
        workLink: "http://www.yamanci.com/",
      },
      {
        workID: 102,
        workName: "Silveradoproperties.com",
        workLink: "https://www.silveradoproperties.com/",
      },
      {
        workID: 103,
        workName: "Athensgeorgiahomesforsale.com",
        workLink: "http://athensgeorgiahomesforsale.com/",
      },
      {
        workID: 104,
        workName: "Seaturtlere.com",
        workLink: "https://seaturtlere.com/",
      },
      {
        workID: 105,
        workName: "Soldonkodiak.com",
        workLink: "http://www.soldonkodiak.com/",
      },
      {
        workID: 106,
        workName: "Klingrealestateltd.com",
        workLink: "http://www.klingrealestateltd.com/",
      },
      {
        workID: 107,
        workName: "Pooleproperties.com",
        workLink: "http://www.pooleproperties.com/",
      },
      {
        workID: 108,
        workName: "Wheredreamslive.com",
        workLink: "http://wheredreamslive.com/",
      },
      {
        workID: 109,
        workName: "Winevalleyhomes.com",
        workLink: "http://www.winevalleyhomes.com/",
      },
      {
        workID: 110,
        workName: "Lancasterandco.com",
        workLink: "http://www.lancasterandco.com/",
      },
      {
        workID: 111,
        workName: "Delexelite.com",
        workLink: "http://www.delexelite.com/",
      },
      {
        workID: 112,
        workName: "Tnvalleymanagement.com",
        workLink: "https://www.tnvalleymanagement.com/",
      },
      {
        workID: 113,
        workName: "Oxfordmsrealty.com",
        workLink: "http://www.oxfordmsrealty.com/",
      },
      {
        workID: 114,
        workName: "Joeleffew.com",
        workLink: "http://joeleffew.com/",
      },
      {
        workID: 115,
        workName: "Katybrahler.com",
        workLink: "http://katybrahler.com/",
      },
      {
        workID: 116,
        workName: "Thecollectionhouston.com",
        workLink: "http://www.thecollectionhouston.com/",
      },
      {
        workID: 117,
        workName: "Kniffing.com",
        workLink: "http://kniffing.com/",
      },
      {
        workID: 118,
        workName: "Jonihomes.com",
        workLink: "http://jonihomes.com/",
      },
      {
        workID: 119,
        workName: "Shorelifeluxury.com",
        workLink: "http://www.shorelifeluxury.com/",
      },
      {
        workID: 120,
        workName: "Shonarusso.com",
        workLink: "http://shonarusso.com/",
      },
      {
        workID: 121,
        workName: "Bsrrealtyinc.com",
        workLink: "http://www.bsrrealtyinc.com/",
      },
      {
        workID: 122,
        workName: "K2Realtyla.com",
        workLink: "http://www.k2realtyla.com/",
      },
      {
        workID: 123,
        workName: "Higginsgroup.com",
        workLink: "https://www.higginsgroup.com/",
      },
      {
        workID: 124,
        workName: "Californialifestylerealty.com",
        workLink: "https://californialifestylerealty.com/",
      },
      {
        workID: 125,
        workName: "Kingcountyestates.com",
        workLink: "http://kingcountyestates.com/",
      },
      {
        workID: 126,
        workName: "Sanluisbayrealty.com",
        workLink: "http://sanluisbayrealty.com/",
      },
      {
        workID: 127,
        workName: "Winmorrisonrealty.com",
        workLink: "https://winmorrisonrealty.com/",
      },
      {
        workID: 128,
        workName: "River2Riverrealty.com",
        workLink: "http://www.river2riverrealty.com/",
      },
      {
        workID: 129,
        workName: "Stacygottula.com",
        workLink: "http://stacygottula.com/",
      },
      {
        workID: 130,
        workName: "Wesellshaverlake.com",
        workLink: "http://www.wesellshaverlake.com/",
      },
      {
        workID: 131,
        workName: "Marshallareahomes.com",
        workLink: "http://www.marshallareahomes.com/",
      },
      {
        workID: 132,
        workName: "Andrewdinsky.com",
        workLink: "http://www.andrewdinsky.com/",
      },
      {
        workID: 133,
        workName: "Yvonnesummerfield.com",
        workLink: "http://www.yvonnesummerfield.com/",
      },
      {
        workID: 134,
        workName: "Carleyhathaway.com",
        workLink: "http://carleyhathaway.com/",
      },
      {
        workID: 135,
        workName: "Hillrealtygrp.com",
        workLink: "http://hillrealtygrp.com/",
      },
      {
        workID: 136,
        workName: "Michaelkingestates.com",
        workLink: "http://www.michaelkingestates.com/",
      },
      {
        workID: 137,
        workName: "Capecoddreamhomes.com",
        workLink: "https://www.capecoddreamhomes.com/",
      },
      {
        workID: 138,
        workName: "Jongrauman.com",
        workLink: "http://jongrauman.com/",
      },
      {
        workID: 139,
        workName: "Phoenixhomes.com",
        workLink: "https://phoenixhomes.com/",
      },
      {
        workID: 140,
        workName: "Waldriprealestate.com",
        workLink: "http://www.waldriprealestate.com/",
      },
      {
        workID: 141,
        workName: "Faithandteamrealestate.com",
        workLink: "https://faithandteamrealestate.com/",
      },
      {
        workID: 142,
        workName: "Snyderstrategy.Net",
        workLink: "https://snyderstrategy.net/",
      },
      {
        workID: 143,
        workName: "Robertlangston.Net",
        workLink: "http://www.robertlangston.net/",
      },
      {
        workID: 144,
        workName: "Theharwoodgrp.com",
        workLink: "http://www.theharwoodgrp.com/",
      },
      {
        workID: 145,
        workName: "Lewisgrouprealestate.com",
        workLink: "http://lewisgrouprealestate.com/",
      },
      {
        workID: 146,
        workName: "Teammargulies.com",
        workLink: "http://www.teammargulies.com/",
      },
      {
        workID: 147,
        workName: "Everglades-Re.com",
        workLink: "http://www.everglades-re.com/",
      },
      {
        workID: 148,
        workName: "Thepearlgates.com",
        workLink: "http://thepearlgates.com/",
      },
      {
        workID: 149,
        workName: "Lindasansone.com",
        workLink: "http://lindasansone.com/",
      },
      {
        workID: 150,
        workName: "Spencerhaschhomes.com",
        workLink: "http://spencerhaschhomes.com/",
      },
      {
        workID: 151,
        workName: "Neathomefinder.com",
        workLink: "http://neathomefinder.com/",
      },
      { workID: 152, workName: "Aezen.com", workLink: "http://www.aezen.com/" },
      {
        workID: 153,
        workName: "Pepinerealty.com",
        workLink: "http://www.pepinerealty.com/",
      },
      {
        workID: 154,
        workName: "Yourhaus.com",
        workLink: "http://yourhaus.com/",
      },
      {
        workID: 155,
        workName: "Gozenconstruction.com",
        workLink: "http://gozenconstruction.com/",
      },
      {
        workID: 156,
        workName: "Modernhomesrealty.com",
        workLink: "http://www.modernhomesrealty.com/",
      },
      {
        workID: 157,
        workName: "Halfonproperties.com",
        workLink: "http://www.halfonproperties.com/",
      },
      {
        workID: 158,
        workName: "Goldkeyrealtysd.com",
        workLink: "https://www.goldkeyrealtysd.com/",
      },
      {
        workID: 159,
        workName: "Californiahousingandlending.com",
        workLink: "http://californiahousingandlending.com/",
      },
      {
        workID: 160,
        workName: "Terianderson.com",
        workLink: "http://terianderson.com/",
      },
      {
        workID: 161,
        workName: "Sammyforrealestate.com",
        workLink: "http://sammyforrealestate.com/",
      },
      {
        workID: 162,
        workName: "Jblmhomefinder.com",
        workLink: "http://www.jblmhomefinder.com/",
      },
      {
        workID: 163,
        workName: "Watsoninternationalorganization.com",
        workLink: "http://watsoninternationalorganization.com/",
      },
      {
        workID: 164,
        workName: "Bestcanyonproperties.com",
        workLink: "https://bestcanyonproperties.com/",
      },
      {
        workID: 165,
        workName: "Hometoheritage.com",
        workLink: "http://www.hometoheritage.com/",
      },
      {
        workID: 166,
        workName: "Welcometonoco.com",
        workLink: "https://www.welcometonoco.com/",
      },
      {
        workID: 167,
        workName: "Jenningsonthepark.com",
        workLink: "http://jenningsonthepark.com/",
      },
      {
        workID: 168,
        workName: "Topsailcoastalliving.com",
        workLink: "http://topsailcoastalliving.com/",
      },
      {
        workID: 169,
        workName: "Pepinecommercial.com",
        workLink: "http://pepinecommercial.com/",
      },
      {
        workID: 170,
        workName: "Chernovteam.com",
        workLink: "http://www.chernovteam.com/",
      },
      {
        workID: 171,
        workName: "Marinismyhome.com",
        workLink: "http://www.marinismyhome.com/",
      },
      {
        workID: 172,
        workName: "Pacificcoastalproperties.com",
        workLink: "http://www.pacificcoastalproperties.com/",
      },
      {
        workID: 173,
        workName: "Wingatecustomhomes.com",
        workLink: "https://www.wingatecustomhomes.com/",
      },
      {
        workID: 174,
        workName: "Kevincumminshomes.com",
        workLink: "http://kevincumminshomes.com/",
      },
      {
        workID: 175,
        workName: "Johnwhansen.com",
        workLink: "http://johnwhansen.com/",
      },
      {
        workID: 176,
        workName: "Zappico.com",
        workLink: "https://www.zappico.com/",
      },
      {
        workID: 177,
        workName: "Michellemcquaderealestate.com",
        workLink: "http://michellemcquaderealestate.com/",
      },
      {
        workID: 178,
        workName: "Jamessilverteam.com",
        workLink: "http://www.jamessilverteam.com/",
      },
      {
        workID: 179,
        workName: "Matthewhohnberger.com",
        workLink: "http://matthewhohnberger.com/",
      },
      {
        workID: 180,
        workName: "Alacartebahamas.com",
        workLink: "http://www.alacartebahamas.com/",
      },
      {
        workID: 181,
        workName: "Therebroker.com",
        workLink: "http://therebroker.com/",
      },
      {
        workID: 182,
        workName: "Intownbethann.com",
        workLink: "https://www.intownbethann.com/",
      },
      {
        workID: 183,
        workName: "Twincities.Realestate/",
        workLink: "http://www.twincities.realestate/",
      },
      {
        workID: 184,
        workName: "Donmunrorealestate.com",
        workLink: "https://www.donmunrorealestate.com/",
      },
      {
        workID: 186,
        workName: "Meritgroupassociates.com",
        workLink: "http://www.meritgroupassociates.com/",
      },
      {
        workID: 187,
        workName: "Tylergriffith.com",
        workLink: "http://tylergriffith.com/",
      },
      {
        workID: 188,
        workName: "Wandacharlesgroup.com",
        workLink: "https://www.wandacharlesgroup.com/",
      },
      {
        workID: 189,
        workName: "Gregmartinez.com",
        workLink: "http://gregmartinez.com/",
      },
      {
        workID: 190,
        workName: "Littleitalycondos.com",
        workLink: "https://www.littleitalycondos.com/",
      },
      {
        workID: 191,
        workName: "Ornajackson.com",
        workLink: "https://ornajackson.com/",
      },
      {
        workID: 192,
        workName: "Homestarhomeloans.Net",
        workLink: "https://homestarhomeloans.net/",
      },
      {
        workID: 193,
        workName: "Oklahomes.com",
        workLink: "https://www.oklahomes.com/",
      },
      {
        workID: 194,
        workName: "Josephhaddad.com",
        workLink: "http://josephhaddad.com/",
      },
      {
        workID: 195,
        workName: "Morrisoncustomhomes.com",
        workLink: "http://morrisoncustomhomes.com/",
      },
      {
        workID: 196,
        workName: "Statenislandlifestyle.com",
        workLink: "http://statenislandlifestyle.com/",
      },
      {
        workID: 197,
        workName: "Cainchicagoresidential.com",
        workLink: "http://cainchicagoresidential.com/",
      },
      {
        workID: 198,
        workName: "Mcspiritbeckett.com",
        workLink: "http://www.mcspiritbeckett.com/",
      },
      {
        workID: 199,
        workName: "Bloomgroupre.com",
        workLink: "http://bloomgroupre.com/",
      },
      {
        workID: 200,
        workName: "Thelakecountry.com",
        workLink: "http://www.thelakecountry.com/",
      },
      {
        workID: 201,
        workName: "Trinityohiohomes.Net",
        workLink: "http://trinityohiohomes.net/",
      },
      {
        workID: 202,
        workName: "Thevandekampgroup.com",
        workLink: "http://thevandekampgroup.com/",
      },
      {
        workID: 203,
        workName: "Mammothrealtyteam.com",
        workLink: "https://mammothrealtyteam.com/",
      },
      {
        workID: 204,
        workName: "Navasotarealtyinc.com",
        workLink: "https://navasotarealtyinc.com/",
      },
      {
        workID: 205,
        workName: "Sanramon.com",
        workLink: "http://www.sanramon.com/",
      },
      {
        workID: 206,
        workName: "Kcooleyproperties.com",
        workLink: "http://kcooleyproperties.com/",
      },
      {
        workID: 207,
        workName: "Cooperativepreferredrealty.com",
        workLink: "http://cooperativepreferredrealty.com/",
      },
      {
        workID: 208,
        workName: "Jamesmondo.com",
        workLink: "https://www.jamesmondo.com/",
      },
      {
        workID: 209,
        workName: "Legacyrealestatefirm.com",
        workLink: "http://legacyrealestatefirm.com/",
      },
      {
        workID: 210,
        workName: "Realestate123.com",
        workLink: "http://realestate123.com/",
      },
      {
        workID: 211,
        workName: "Optimaproperties.com",
        workLink: "http://www.optimaproperties.com/",
      },
      {
        workID: 212,
        workName: "Santafeabby.com",
        workLink: "http://www.santafeabby.com/",
      },
      {
        workID: 213,
        workName: "Chenagency.com",
        workLink: "http://www.chenagency.com/",
      },
      {
        workID: 214,
        workName: "Mountainleisureteam.com",
        workLink: "http://mountainleisureteam.com/",
      },
      {
        workID: 215,
        workName: "Riklinrealty.com",
        workLink: "http://www.riklinrealty.com/",
      },
      { workID: 216, workName: "Sl-Rg.com", workLink: "http://www.sl-rg.com/" },
      {
        workID: 217,
        workName: "Hlraymondproperties.com",
        workLink: "http://www.hlraymondproperties.com/",
      },
      {
        workID: 218,
        workName: "Housleyhomes.com",
        workLink: "https://www.housleyhomes.com/",
      },
      {
        workID: 219,
        workName: "Lisavitta.com",
        workLink: "http://www.lisavitta.com/",
      },
      {
        workID: 220,
        workName: "Janetdebuskhensley.com",
        workLink: "http://janetdebuskhensley.com/",
      },
      {
        workID: 221,
        workName: "Indianarealtypros.com",
        workLink: "http://indianarealtypros.com/",
      },
      {
        workID: 222,
        workName: "Warnerrobinshomesearch.com",
        workLink: "http://www.warnerrobinshomesearch.com/",
      },
      {
        workID: 223,
        workName: "Mymarketconnection.com",
        workLink: "http://mymarketconnection.com/",
      },
      {
        workID: 224,
        workName: "Ohanahomesca.com",
        workLink: "http://www.ohanahomesca.com/",
      },
      {
        workID: 225,
        workName: "Helenebarkin.com",
        workLink: "http://helenebarkin.com/",
      },
      {
        workID: 226,
        workName: "Aheadofthecurvehomes.com",
        workLink: "https://aheadofthecurvehomes.com/",
      },
      {
        workID: 227,
        workName: "Tksellshomes.com",
        workLink: "http://www.tksellshomes.com/",
      },
      {
        workID: 228,
        workName: "Dustysellsrealestate.com",
        workLink: "http://dustysellsrealestate.com/",
      },
      {
        workID: 229,
        workName: "Robseibert.com",
        workLink: "http://robseibert.com/",
      },
      {
        workID: 230,
        workName: "Montecito-Estate.com",
        workLink: "https://montecito-estate.com/",
      },
      {
        workID: 231,
        workName: "Boardwalkpremierrealty.com",
        workLink: "https://www.boardwalkpremierrealty.com/",
      },
      {
        workID: 232,
        workName: "Jamesgroup1.com",
        workLink: "http://www.jamesgroup1.com/",
      },
      {
        workID: 233,
        workName: "Smytherealestate.com",
        workLink: "http://www.smytherealestate.com/",
      },
      {
        workID: 234,
        workName: "Platarealtygroup.com",
        workLink: "https://platarealtygroup.com/",
      },
      {
        workID: 235,
        workName: "Mcraerealestate.com",
        workLink: "http://www.mcraerealestate.com/",
      },
      {
        workID: 236,
        workName: "Simplyhomesfargo.com",
        workLink: "http://www.simplyhomesfargo.com/",
      },
      {
        workID: 237,
        workName: "Amandaamo.com",
        workLink: "http://www.amandaamo.com/",
      },
      {
        workID: 238,
        workName: "Isleluxury.com",
        workLink: "http://www.isleluxury.com/",
      },
      {
        workID: 239,
        workName: "Lordandsaunders.com",
        workLink: "https://www.lordandsaunders.com/",
      },
      {
        workID: 240,
        workName: "Lakesandcountry.com",
        workLink: "http://www.lakesandcountry.com/",
      },
      {
        workID: 241,
        workName: "Mauiislandrealty.com",
        workLink: "http://www.mauiislandrealty.com/",
      },
      {
        workID: 242,
        workName: "Thefountaingrouptn.com",
        workLink: "http://www.thefountaingrouptn.com/",
      },
      {
        workID: 243,
        workName: "Stineandco.com",
        workLink: "http://stineandco.com/",
      },
      {
        workID: 244,
        workName: "Donohuerealestate.com",
        workLink: "https://www.donohuerealestate.com/",
      },
      {
        workID: 245,
        workName: "Freddapartners.com",
        workLink: "http://www.freddapartners.com/",
      },
      {
        workID: 246,
        workName: "Privatehomeshawaii.com",
        workLink: "https://privatehomeshawaii.com/",
      },
      {
        workID: 247,
        workName: "Bigteniowacity.com",
        workLink: "http://www.bigteniowacity.com/",
      },
      {
        workID: 248,
        workName: "Royalarchrealestate.com",
        workLink: "https://www.royalarchrealestate.com/",
      },
      {
        workID: 249,
        workName: "Biancorealty.com",
        workLink: "https://www.biancorealty.com/",
      },
      {
        workID: 250,
        workName: "Teresafortegreenberg.com",
        workLink: "http://www.teresafortegreenberg.com/",
      },
      {
        workID: 251,
        workName: "Corerealtygroupnw.com",
        workLink: "http://www.corerealtygroupnw.com/",
      },
      {
        workID: 252,
        workName: "Accessnjhomes.com",
        workLink: "http://accessnjhomes.com/",
      },
      {
        workID: 253,
        workName: "Lxbahamas.com",
        workLink: "http://www.lxbahamas.com/",
      },
      {
        workID: 254,
        workName: "Darinrichrealestate.com",
        workLink: "https://darinrichrealestate.com/",
      },
      {
        workID: 255,
        workName: "Southfloridafamilyfriendlyliving.com",
        workLink: "http://www.southfloridafamilyfriendlyliving.com/",
      },
      {
        workID: 256,
        workName: "Missionvalleyrealestate.com",
        workLink: "http://www.missionvalleyrealestate.com/",
      },
      {
        workID: 257,
        workName: "Texashillsandlakes.com",
        workLink: "http://www.texashillsandlakes.com/",
      },
      {
        workID: 258,
        workName: "Sfeizigroup.com",
        workLink: "https://sfeizigroup.com/",
      },
      {
        workID: 259,
        workName: "Remaxkauai.com",
        workLink: "http://remaxkauai.com/",
      },
      {
        workID: 260,
        workName: "Tedbosehomes.com",
        workLink: "https://tedbosehomes.com/",
      },
      {
        workID: 261,
        workName: "Ambergrealestate.com",
        workLink: "http://ambergrealestate.com/",
      },
      {
        workID: 262,
        workName: "Srqcorp.com",
        workLink: "https://srqcorp.com/",
      },
      {
        workID: 263,
        workName: "Celebrityrealestateadvisors.com",
        workLink: "https://www.celebrityrealestateadvisors.com/",
      },
      {
        workID: 264,
        workName: "Bestrvahomes.com",
        workLink: "https://www.bestrvahomes.com/",
      },
      {
        workID: 265,
        workName: "Newviewrealtygroup.com",
        workLink: "http://newviewrealtygroup.com/",
      },
      {
        workID: 266,
        workName: "Brendamcneill.com",
        workLink: "http://brendamcneill.com/",
      },
      {
        workID: 267,
        workName: "Wentworthrealtyfla.com",
        workLink: "http://www.wentworthrealtyfla.com/",
      },
      {
        workID: 268,
        workName: "Weinbergchoi.com",
        workLink: "http://weinbergchoi.com/",
      },
      {
        workID: 269,
        workName: "Joneshollowrealty.com",
        workLink: "https://joneshollowrealty.com/",
      },
      {
        workID: 270,
        workName: "Galaxymodern.com",
        workLink: "http://www.galaxymodern.com/",
      },
      {
        workID: 271,
        workName: "Soregonhomes.com",
        workLink: "http://soregonhomes.com/",
      },
      {
        workID: 272,
        workName: "Thecollinsgroupoc.com",
        workLink: "http://thecollinsgroupoc.com/",
      },
      {
        workID: 273,
        workName: "Joeyremington.com",
        workLink: "https://joeyremington.com/",
      },
      {
        workID: 274,
        workName: "Djpatel.Net",
        workLink: "http://www.djpatel.net/",
      },
    ],
  };
  render() {
    return (
      <div>
        <Sidebar />
        <main id="main">
          <div className="main-outer">
            <div className="container-fluid">
              <Spring
                from={{ opacity: 0, marginRight: -70 }}
                to={{ opacity: 1, marginRight: 0 }}
              >
                {(props) => (
                  <div className="row" style={props}>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="text">
                          <h1>Jerome Escultura</h1>
                          <p>
                            I am a Full stack developer with a passion for
                            graphic and web design. With a great deal of
                            experience under my belt using web technologies like
                            Angular and React.js, I have contributed to the
                            development and maintenance of numerous websites
                            such as Canstar, Ogroup,The Noel Team, and Chen
                            Agency to name a few.
                          </p>
                          <h2>List of Websites</h2>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div id="works-grid">
                          <WorkList workProject={this.state.workProject} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </Spring>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Works;
