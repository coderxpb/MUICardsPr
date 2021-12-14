import roundDoodle from '../assets/round.png'
import tickDoodle from '../assets/tick.png'
import wiggleDoodle from '../assets/wiggle.png'

interface PropsType{
  top: number,
  left: number,
  type: 'round' | 'tick' | 'wiggle',
}
export const Doodles = (props: PropsType) => {
  const {top, left, type} = props;

}