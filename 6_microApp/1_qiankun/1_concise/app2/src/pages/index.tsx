import { useModel } from 'umi';
import { useEffect } from 'react'
import styles from './index.less';

export default function IndexPage() {
  // const masterProps = useModel('@@qiankunStateFromMaster') || {};
  // const { setMasterState, masterState } = masterProps;
  // console.log(setMasterState, masterState)
  // useEffect(() => {
  //   setMasterState({ b: 2 })
  // }, [])

  return (
    <div>
      <h1 className={styles.title}>Page index2 app</h1>
    </div>
  );
}
