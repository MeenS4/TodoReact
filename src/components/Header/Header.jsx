import './Header.scss';

export default function Header({ text }) {
  return (
    <div className='header'>
      <h1>{text}</h1>
    </div>
  );
}
