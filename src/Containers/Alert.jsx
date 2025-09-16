export default function Alert(props) {
    return (
        <>
        <div style={{height : '45px'}}>
            {props.alert && <div>
                <div className={`alert alert-${props.alert.type}`} role="alert">
                    {props.alert.msg}
                </div>
            </div>}
        </div>
        </>
    )
}
