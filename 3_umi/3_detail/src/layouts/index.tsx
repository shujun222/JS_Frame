/**
 * 添加的布局，会根据路由解析到不同的url下
 */
export default (props: any) => {
    return (<>
        <div style={{width: '20%', height: "800px", border: '1px solid red', float: 'left'}}>
            menus
        </div>
        
        <div style={{float: 'left', width: '80%'}}>
            <div style={{height: '100px', border: '1px solid green'}}>顶部导航</div>

            <div style={{padding: '50px'}}>
                {props.children}
            </div>
            
        </div>
    </>)
}