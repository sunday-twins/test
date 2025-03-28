// import '../../scss/components/list/profile.scss'

const BoxProfile = ({ src, name }) => {
  return (
    <div className="box_profile">
      <div className="img">
        <img src={src} alt="" />
      </div>
      <div className="name">{name}</div>
    </div>
  )
};

export default BoxProfile;