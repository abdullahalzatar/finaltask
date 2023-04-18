import Image from 'next/image'
import styles from'@/styles/MainCompnent.module.css'
import Linechart from './LineChart'
import Squchart from './SquChart'
import SerchTable from './SerchTable'
import DownloadTable from './DownloadTable'
import Map from './Map'

export default function MainCompnent() {

  return (
    <>
     <div className={styles.maincompnent}>
            <div className={styles.namebox}> 
            <div className={styles.state}>
                <p className={styles.bigname}>Abdullah Al-zatar</p>
                <p>Admin</p>
            </div>
            <div className={styles.login}>
                <p>Your users added <span> 324 new assets</span> since your last login on 23 Nov 2022</p>
            </div>
            </div>

            <div className={styles.numbers}>
                <div className={styles.accnumbers}>
                    <div className={styles.newaccnumbers}>174</div>
                    <div className={styles.newaccnumbers_dis}>
                        <p className={styles.bignumber}>New Accounts Created</p>
                        <p>Last update on 12/06/2022</p>
                    </div>
                    <div className={styles.increasednumbers}>5%</div>
                    <div className={styles.increasednumbers_dis}>
                        <p className={styles.bignumber}>Increased Pageviews</p>
                        <p>Last update on 12/06/2022</p>
                    </div>
                </div>

                <div className={styles.Tasks}>
                <div className={styles.Tasksbox}>
                    <div className={styles.TasksPending}>62</div>
                    <div className={styles.TasksPending_dis}>
                        <p className={styles.bignumber}>Tasks Pending</p>
                        <p>23 overdue</p>
                    </div>
                    </div>
                    <div className={styles.Tasksbox}>
                    <div className={styles.Notifications}>13</div>
                    <div className={styles.Notifications_dis}>
                        <p className={styles.bignumber}>New Notifications</p>
                        <p>23 overdue</p>
                    </div>
                    </div>

                    <div className={styles.Tasksbox}>
                    <div className={styles.Requests}>21</div>
                    <div className={styles.Requests_dis}>
                        <p className={styles.bignumber}>New Requests</p>
                        <p>Since your last login</p>
                    </div>
                    </div>

                </div>
            </div>

            <div className={styles.Trafficchart}> 
            <p>Portal Traffic (Per Month)</p>
            <div ><Linechart/></div>
            </div>

            <div className={styles.Portal}> 
            
              <div className={styles.map}> 
              <p>Portal Usage</p>
              <div className={styles.mapbox}>
                <div className={styles.mapimg}>
                <Map/>
              </div>
              <div className={styles.mapdis}>
                <div className={styles.mapdis_box}>
                    <p className={styles.mapdis_box__big}>2%</p>
                    <p className={styles.mapdis_box__mid}>Worldwide Increase</p>
                    <p className={styles.mapdis_box__sm}>Last update on 12/06/2022</p>
                </div>
                <div className={styles.mapdis_box}>
                    <p className={styles.mapdis_box__big}>8%</p>
                    <p className={styles.mapdis_box__mid}>Domestic Increase</p>
                    <p className={styles.mapdis_box__sm}>Last update on 12/06/2022</p>
                </div>
                <div className={styles.mapdis_box}>
                    <p className={styles.mapdis_box__viwe}><span>View</span> Downloads</p>
                </div>
              </div>
              </div>
              </div>

              <div className={styles.assets}>
                <div className={styles.yourassets}>
                    <div className={styles.assetschart}>
                        <p className={styles.assetschart_big}>Your Assets</p>
                        <p className={styles.assetschart_small}><span>13458</span> Total Assets on Portal</p>
                        <Squchart/>
                        </div>
                    <div className={styles.assetsnumb}>
                        <div className={styles.assetsnumb__cont}>
                        <p className={styles.assetsnumb_big}>2870</p>
                        <p className={styles.assetsnumb_small}>Uploaded to Date</p>
                        </div>
                    </div>
                    <div className={styles.assetsuplode}>
                    <Image src="/icons8-upload_to_cloud.svg" alt="Logo" width={159} height={43} className={styles.assetsuplodeimg}/>
                    <p>Drag and drop your files here <br/> or</p>
                    <button>Browse</button>
                    </div>
                </div>
                <div className={styles.viweassets}>
                  <div className={styles.viweassets_box}>
                    <div className={styles.viweassets_img}><Image src="/Screenshot 2023-04-17 100222.png" alt="Logo" width={170} height={120} /></div>
                    <div className={styles.viweassets_Assetsnumber}>+ 13</div>
                    <div className={styles.viweassets_Assetsp}>Assets pending details</div>
                    <div className={styles.viweassets_Viewp}><span>View</span> Assets</div>
                    </div>
                </div>
              </div>

            </div>

            <div className={styles.tables}>
            
            <div className={styles.tables_search}>
                    <div className={styles.discrption}>
                        <p>Most Searched Keywords (Global - Top5)</p>
                        <select><option>Last month</option></select>
                    </div>
                    <div className={styles.table}>
        <SerchTable/>
         </div>
                </div>

                <div className={styles.tables_download}>
                <div className={styles.discrption}>
                        <p>Most Downloaded Assets</p>
                        <select><option>Past 6 months</option></select>
                    </div>
                    <div className={styles.table}>
        <DownloadTable/>
         </div>
                </div>
            </div>



      </div>
    </>
  )
}
