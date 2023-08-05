import my_photo_1 from '../images/my_photo_1.JPG';


const Socials = () => {
    return (
        <div className="socials">
            <img src={my_photo_1} alt="Profile Photo" height={350} width={350}/>
            <p>Connect</p>
            <p>aryaman.kolhe@research.iiit.ac.in</p>
        </div>
    );
};

export default Socials;
