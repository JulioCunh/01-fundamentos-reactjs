import { Header } from './Components/Header';
import {Post} from './Components/Post';
import {Sidebar} from './Components/Sidebar';

import './global.css';
import styles from './App.module.css';

export function App() {

  return (
    <div>
      <Header/>

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
           author="Julio Cunha"
           content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores optio adipisci neque sint aperiam ipsum quod, nihil vero nemo explicabo sit! Blanditiis nihil sed tempora, minus accusamus aliquid iure repudiandae!"
          />
           <Post
           author="Cesar Cunha"
           content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores optio adipisci neque sint aperiam ipsum quod, nihil vero nemo explicabo sit! Blanditiis nihil sed tempora, minus accusamus aliquid iure repudiandae!"
          />

        </main>
      </div>

    </div>    

  )
}

