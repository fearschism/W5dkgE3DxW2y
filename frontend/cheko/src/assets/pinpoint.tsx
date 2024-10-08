
type PinProps = {
    color: string
}
const PinPointSVG = ({color}: PinProps) => {
   return ( 
<svg className="cursor-pointer" width="25px" height="30px" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 8.12313C2.5 12.3656 6.88183 19.5 10 19.5C13.1182 19.5 17.5 12.3656 17.5 8.12313C17.5 3.91715 14.1464 0.5 10 0.5C5.85362 0.5 2.5 3.91715 2.5 8.12313ZM10 5.5C11.3807 5.5 12.5 6.61929 12.5 8C12.5 9.38071 11.3807 10.5 10 10.5C8.61929 10.5 7.5 9.38071 7.5 8C7.5 6.61929 8.61929 5.5 10 5.5Z" fill={`${color}`}/>
</svg>
   );
}

export default PinPointSVG