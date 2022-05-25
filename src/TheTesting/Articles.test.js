import Enzyme, { render, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Articles from './Articles';
import Tables from './Tables';
Enzyme.configure({ adapter: new Adapter() });


describe('Article page',()=>{
    it('click Count',()=>{
        let words = shallow(<Articles />)
        // console.log(words.debug());
        expect(words.find('.clicks-0').length).toEqual(1)
        words.find('button').simulate('click')
        expect(words.find('.clicks-1').length).toEqual(1)
    })
    it('click Count incre 2',()=>{
        let words = shallow(<Articles />)
        // console.log(words.debug());
        expect(words.find('.clicks-0').length).toEqual(1)
        words.find('button').simulate('click')
        words.find('button').simulate('click')
        expect(words.find('.clicks-2').length).toEqual(1)
    })
    it('Dive in Table',()=>{
        let variables = shallow(<Articles />)
        expect(variables.find(Tables).dive().find('.custom-border').length).toBe(1)
    })
    it('SnapShot 1',()=>{
        let variables = shallow(<Tables/>)
        expect(variables).toMatchSnapshot();
    })
})