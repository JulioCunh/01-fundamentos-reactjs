import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar';

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/JulioCunh.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Julio Cunha</strong>
              <time title='29 de agosto as 18:46' dateTime="2022-08-29">Cerca de 1 hora atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom dev, parabéns!!</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Apaludir <span>20</span>
          </button>
        </footer>

      </div>
    </div>
  )
}