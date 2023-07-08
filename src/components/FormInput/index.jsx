import './index.scss';
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />

      {label && ( // 如果label存在，则渲染这个label
        <label
          className={`${otherProps.value.length ? 'shrink' : ''} 
          form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
