import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const style = {
    display: 'flex',
    marginTop: '2rem',
    marginBottom: '0.5rem',
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white'
}

export default function Footer() {
    return (
        <footer style={style}>
            Jaya Baldwin <FavoriteBorderIcon sx={{ml: 1, mr: 1}}/> 2024
        </footer>
    )
}