<template>
  <div class="kundenservice">
    <b-container fluid>
      <b-tabs>
  <b-tab title="Kunden" active>
      <b-row>
        <b-col cols=3>Suche</b-col>
        <b-col>
          <b-row>
            <div class="d-flex flex-wrap">
            
            
              <b-card     title="Card Title"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 25rem;"

                  >
                      <p class="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                      </p>
                      <b-button href="#" variant="primary">Go somewhere</b-button>
            </b-card>
          
            <b-card title="Card Title"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 25rem;"
          >
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
<b-card title="Card Title"
                  img-src="https://picsum.photos/600/300/?image=25"
                  img-alt="Image"
                  img-top
                  tag="article"
                  style="max-width: 25rem;"
          >
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
  </div>
          </b-row>
        </b-col>
    </b-row>

  </b-tab>
  <b-tab title="Liste" >
    <b-table hover :items='items'></b-table>
  </b-tab>
</b-tabs>
</b-container>

  </div>

</template>

<script>
const items = [
  {
    'Kunde_Vorname': 'Rutledge',
    'Name_Firma': 'Parrish',
    'company': 'ORBAXTER',
    'email': 'rutledge.parrish@orbaxter.io',
    'phone': '+1 (881) 546-3716',
    'address': '418 Underhill Avenue, Belfair, Florida, 3603'
  },
  {
    'Kunde_Vorname': 'Barnett',
    'Name_Firma': 'Yang',
    'company': 'ZOLAR',
    'email': 'barnett.yang@zolar.net',
    'phone': '+1 (894) 560-3434',
    'address': '410 Box Street, Levant, Rhode Island, 1511'
  },
  {
    'Kunde_Vorname': 'Tammy',
    'Name_Firma': 'Leonard',
    'company': 'COMBOGENE',
    'email': 'tammy.leonard@combogene.org',
    'phone': '+1 (902) 482-2014',
    'address': '523 Lott Street, Waiohinu, Marshall Islands, 3019'
  },
  {
    'Kunde_Vorname': 'Lindsey',
    'Name_Firma': 'Stark',
    'company': 'IMAGINART',
    'email': 'lindsey.stark@imaginart.com',
    'phone': '+1 (938) 558-3185',
    'address': '242 Troutman Street, Grantville, Mississippi, 3768'
  },
  {
    'Kunde_Vorname': 'Lester',
    'Name_Firma': 'Harrison',
    'company': 'ZEDALIS',
    'email': 'lester.harrison@zedalis.us',
    'phone': '+1 (879) 491-3965',
    'address': '874 Bushwick Court, Mahtowa, North Carolina, 2780'
  },
  {
    'Kunde_Vorname': 'Nanette',
    'Name_Firma': 'Macdonald',
    'company': 'EBIDCO',
    'email': 'nanette.macdonald@ebidco.name',
    'phone': '+1 (834) 596-2962',
    'address': '880 Jackson Place, Ripley, Connecticut, 6842'
  },
  {
    'Kunde_Vorname': 'Shari',
    'Name_Firma': 'Reeves',
    'company': 'ACUMENTOR',
    'email': 'shari.reeves@acumentor.me',
    'phone': '+1 (987) 528-2443',
    'address': '854 Himrod Street, Edinburg, Idaho, 2987'
  },
  {
    'Kunde_Vorname': 'Delores',
    'Name_Firma': 'Hood',
    'company': 'WEBIOTIC',
    'email': 'delores.hood@webiotic.ca',
    'phone': '+1 (912) 597-2316',
    'address': '365 Barwell Terrace, Biehle, Kentucky, 5384'
  },
  {
    'Kunde_Vorname': 'Hatfield',
    'Name_Firma': 'Harmon',
    'company': 'KANGLE',
    'email': 'hatfield.harmon@kangle.biz',
    'phone': '+1 (867) 491-3311',
    'address': '216 Gaylord Drive, Advance, Oklahoma, 4472'
  },
  {
    'Kunde_Vorname': 'Klein',
    'Name_Firma': 'Willis',
    'company': 'QUILITY',
    'email': 'klein.willis@quility.tv',
    'phone': '+1 (976) 431-3165',
    'address': '284 Malta Street, Dubois, American Samoa, 6202'
  },
  {
    'Kunde_Vorname': 'Myra',
    'Name_Firma': 'Taylor',
    'company': 'GEEKETRON',
    'email': 'myra.taylor@geeketron.info',
    'phone': '+1 (897) 524-2384',
    'address': '684 Hooper Street, Riner, Utah, 7588'
  },
  {
    'Kunde_Vorname': 'Banks',
    'Name_Firma': 'Pitts',
    'company': 'COLAIRE',
    'email': 'banks.pitts@colaire.biz',
    'phone': '+1 (863) 525-3027',
    'address': '526 Amboy Street, Starks, Minnesota, 6744'
  },
  {
    'Kunde_Vorname': 'Vaughan',
    'Name_Firma': 'Haley',
    'company': 'ANDERSHUN',
    'email': 'vaughan.haley@andershun.io',
    'phone': '+1 (989) 558-2961',
    'address': '132 Schermerhorn Street, Topanga, Wyoming, 2826'
  },
  {
    'Kunde_Vorname': 'Stacie',
    'Name_Firma': 'Pittman',
    'company': 'GRONK',
    'email': 'stacie.pittman@gronk.net',
    'phone': '+1 (893) 471-2329',
    'address': '914 Charles Place, Loma, New Mexico, 2249'
  },
  {
    'Kunde_Vorname': 'Lindsey',
    'Name_Firma': 'Ramirez',
    'company': 'EXTRAWEAR',
    'email': 'lindsey.ramirez@extrawear.org',
    'phone': '+1 (857) 472-3372',
    'address': '951 Seagate Avenue, Rockbridge, Texas, 3911'
  },
  {
    'Kunde_Vorname': 'Stanton',
    'Name_Firma': 'Andrews',
    'company': 'ZILLATIDE',
    'email': 'stanton.andrews@zillatide.com',
    'phone': '+1 (825) 594-3597',
    'address': '390 Diamond Street, Stewart, South Dakota, 2629'
  },
  {
    'Kunde_Vorname': 'Bell',
    'Name_Firma': 'Carter',
    'company': 'SULTRAX',
    'email': 'bell.carter@sultrax.us',
    'phone': '+1 (996) 452-2532',
    'address': '680 Lake Street, Chesapeake, Maryland, 4207'
  },
  {
    'Kunde_Vorname': 'Summers',
    'Name_Firma': 'Chang',
    'company': 'LIMOZEN',
    'email': 'summers.chang@limozen.name',
    'phone': '+1 (846) 589-3362',
    'address': '913 Harman Street, Waikele, Guam, 305'
  },
  {
    'Kunde_Vorname': 'Bernard',
    'Name_Firma': 'Potter',
    'company': 'SONGLINES',
    'email': 'bernard.potter@songlines.me',
    'phone': '+1 (820) 585-3312',
    'address': '521 Arion Place, Fulford, Kansas, 7746'
  },
  {
    'Kunde_Vorname': 'Joanne',
    'Name_Firma': 'Franco',
    'company': 'MAGNEMO',
    'email': 'joanne.franco@magnemo.ca',
    'phone': '+1 (811) 445-3707',
    'address': '965 Radde Place, Bancroft, Montana, 4638'
  },
  {
    'Kunde_Vorname': 'Maritza',
    'Name_Firma': 'Charles',
    'company': 'BALOOBA',
    'email': 'maritza.charles@balooba.biz',
    'phone': '+1 (892) 487-2939',
    'address': '404 Melrose Street, Bluetown, Missouri, 7452'
  },
  {
    'Kunde_Vorname': 'Johnson',
    'Name_Firma': 'Moss',
    'company': 'EXTRAGEN',
    'email': 'johnson.moss@extragen.tv',
    'phone': '+1 (915) 539-2335',
    'address': '235 Poly Place, Slovan, Virgin Islands, 2505'
  },
  {
    'Kunde_Vorname': 'Cora',
    'Name_Firma': 'Holman',
    'company': 'MARVANE',
    'email': 'cora.holman@marvane.info',
    'phone': '+1 (966) 471-3341',
    'address': '744 Nostrand Avenue, Brady, Illinois, 5658'
  },
  {
    'Kunde_Vorname': 'Vilma',
    'Name_Firma': 'Haney',
    'company': 'MENBRAIN',
    'email': 'vilma.haney@menbrain.biz',
    'phone': '+1 (943) 404-2861',
    'address': '871 Bragg Court, Konterra, Pennsylvania, 2852'
  },
  {
    'Kunde_Vorname': 'Daisy',
    'Name_Firma': 'Brewer',
    'company': 'SARASONIC',
    'email': 'daisy.brewer@sarasonic.io',
    'phone': '+1 (800) 491-2065',
    'address': '677 Harkness Avenue, Townsend, Alabama, 112'
  },
  {
    'Kunde_Vorname': 'Swanson',
    'Name_Firma': 'Weeks',
    'company': 'EYEWAX',
    'email': 'swanson.weeks@eyewax.net',
    'phone': '+1 (936) 563-2617',
    'address': '835 Kane Place, Evergreen, New Jersey, 7794'
  },
  {
    'Kunde_Vorname': 'Woodward',
    'Name_Firma': 'Owen',
    'company': 'HELIXO',
    'email': 'woodward.owen@helixo.org',
    'phone': '+1 (943) 520-2414',
    'address': '212 Maple Avenue, Lindisfarne, Colorado, 8893'
  },
  {
    'Kunde_Vorname': 'Mollie',
    'Name_Firma': 'Cervantes',
    'company': 'NAMEBOX',
    'email': 'mollie.cervantes@namebox.com',
    'phone': '+1 (861) 431-3447',
    'address': '796 Bedell Lane, Southmont, Federated States Of Micronesia, 5635'
  },
  {
    'Kunde_Vorname': 'Valerie',
    'Name_Firma': 'Mccoy',
    'company': 'PYRAMIA',
    'email': 'valerie.mccoy@pyramia.us',
    'phone': '+1 (872) 538-2056',
    'address': '138 Milton Street, Allentown, Georgia, 2300'
  },
  {
    'Kunde_Vorname': 'Harper',
    'Name_Firma': 'Curry',
    'company': 'WAAB',
    'email': 'harper.curry@waab.name',
    'phone': '+1 (845) 476-3132',
    'address': '977 Richmond Street, Aurora, Arkansas, 8283'
  },
  {
    'Kunde_Vorname': 'Kane',
    'Name_Firma': 'Booker',
    'company': 'EMPIRICA',
    'email': 'kane.booker@empirica.me',
    'phone': '+1 (946) 407-3182',
    'address': '412 Baycliff Terrace, Jackpot, Iowa, 6585'
  },
  {
    'Kunde_Vorname': 'Simpson',
    'Name_Firma': 'Williamson',
    'company': 'ACCUPHARM',
    'email': 'simpson.williamson@accupharm.ca',
    'phone': '+1 (852) 435-2062',
    'address': '409 Love Lane, Sims, Arizona, 6294'
  },
  {
    'Kunde_Vorname': 'Atkins',
    'Name_Firma': 'Holloway',
    'company': 'GENMY',
    'email': 'atkins.holloway@genmy.biz',
    'phone': '+1 (815) 587-2684',
    'address': '280 Cameron Court, Katonah, New York, 9625'
  }
]

export default {
  name: 'kundenservice',
  data () {
    return {
      items: items
    }
  }
}
</script>
 

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
