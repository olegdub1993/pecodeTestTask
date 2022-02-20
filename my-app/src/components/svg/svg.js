import React from "react";
export const ArrowDown = ({ className }) => {
    return  <svg  className={className} xmlns="http://www.w3.org/2000/svg" width="16.884" height="8.808" viewBox="0 0 16.884 8.808">
                <path id="Chevron" d="M.834,0,0,.878,7.145,8.442,0,16.006l.834.878L8.808,8.442Z" transform="translate(16.884) rotate(90)"/>
            </svg>
}
export const PointsIcon = ({className}) => {
                return   <svg className={className}  xmlns="http://www.w3.org/2000/svg" width="24" height="27" viewBox="0 0 24 27">
                            <text id="_._._." data-name=". . ." transform="translate(12 22)" fontSize="20" fontFamily="SegoeUI, Segoe UI"><tspan x="-11.982" y="0">. . .</tspan></text>
                        </svg>
}
export const CloseIcon = ({ className}) => {
    return <svg  className={className} xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                <path id="Close" d="M10.649,9l7.009-7.009A1.166,1.166,0,0,0,16.009.342L9,7.351,1.991.342A1.166,1.166,0,0,0,.342,1.991L7.351,9,.342,16.009a1.166,1.166,0,1,0,1.649,1.649L9,10.649l7.009,7.009a1.166,1.166,0,0,0,1.649-1.649Zm0,0"/>
            </svg>
}