export const Propstest = (props) => {
  const contStyle = {
    name: props.name
  }
  const onClickButton = () => {
    alert();
  }
  return <input type='button' name={contStyle.name} value={contStyle.name} onClick={onClickButton} />
}