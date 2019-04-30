import React, { Component } from 'react';
import firebase from './firebase'
import 'bootstrap/dist/css/bootstrap.css';
import {
    Button,
    ButtonGroup,
    Pagination,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Tables,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Popover, PopoverHeader, PopoverBody
    
} from 'reactstrap';

const items = [
    {
      src: 'https://mellow975.mcot.net/uploads/articles/x95ff0858b205aa05774cc1db6dc45caa.jpg.pagespeed.ic.LL_ATWw60J.jpg',
    },
    {
      src: 'https://i.pinimg.com/originals/4f/9b/68/4f9b6872587e6994fe7fd8ea43e4b29a.jpg',
    },
    {
      src: 'https://praew.com/app/uploads/2018/10/fgjuhgu.jpg',
    },
    {
        src: 'https://f.ptcdn.info/937/056/000/p6ny9ja8k93ff9XHGvn-o.png',
      }
  ];
  
    class App extends Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);

      this.toggle1 = this.toggle1.bind(this);
      this.toggle2 = this.toggle2.bind(this);
      this.toggle3 = this.toggle3.bind(this);
      this.toggle4 = this.toggle4.bind(this);
      this.toggle5 = this.toggle5.bind(this);
      this.toggle6 = this.toggle6.bind(this);
      this.toggle7 = this.toggle7.bind(this);
      this.toggle8 = this.toggle8.bind(this);
      this.toggle9 = this.toggle9.bind(this);
      this.toggle10 = this.toggle10.bind(this);
      this.toggle11 = this.toggle11.bind(this);
      this.toggle12 = this.toggle12.bind(this);
      this.toggle13 = this.toggle13.bind(this);

      this.choose1 = this.choose1.bind(this);
      this.choose2 = this.choose2.bind(this);
      this.choose3 = this.choose3.bind(this);
      this.choose4 = this.choose4.bind(this);
      this.choose5 = this.choose5.bind(this);
      this.choose6 = this.choose6.bind(this);
      this.choose7 = this.choose7.bind(this);
      this.choose8 = this.choose8.bind(this);
      this.choose9 = this.choose9.bind(this);
      this.choose10 = this.choose10.bind(this);
      this.choose11 = this.choose11.bind(this);
      this.choose12 = this.choose12.bind(this);
      
      this.commend = this.commend.bind(this);
      
      this.state = {
        peoples: [],
        user_id: '',
        bnk_name: '',
        ota_name: '',
        description: '',
        collapsed: true,
        isOpen: false,
        home: true,
        member: false,
        
        bnk1: false,
        bnk2: false,
        bnk3: false,
        bnk4: false,
        bnk5: false,
        bnk6: false,
        bnk7: false,
        bnk8: false,
        bnk9: false,
        bnk10: false,
        bnk11: false,
        bnk12: false,
        
        detail1 : false,
        detail2 : false,
        detail3 : false,
        detail4 : false,
        detail5 : false,
        detail6 : false,
        detail7 : false,
        detail8 : false,
        detail9 : false,
        detail10 : false,
        detail11 : false,
        detail12 : false,

        show: false,
        activeIndex : 0
      }

    }
    componentDidMount(){
        const peoplesRef = firebase.database().ref('peoples');
        peoplesRef.on('value',(snapshot) => {
            let peoples = snapshot.val();
            let newState = [];
            for(let member in peoples){
              newState.push({
                  user_id:member,
                  bnk_name:peoples[member].bnk_name,
                  ota_name:peoples[member].ota_name,
                  description:peoples[member].description
              })
            }
            this.setState({
              peoples:newState
            })
        })
    }
    
    handleChange(e){
        this.setState({
          [e.target.name]: e.target.value
        })
    }
    
    handleSubmit(e){
        e.preventDefault();
        if(this.state.bnk_name==''){
          alert("Please choose Member.");
        }
        else if(this.state.name==''){
          alert("Please input Your Name.");
        }
        else if(this.state.description==''){
          alert("Please input Your description.");
        }
        else{
            if(this.state.user_id != ''){
                return this.updateItem();
            }
            const peoplesRef = firebase.database().ref('peoples')
            const member = {
                bnk_name : this.state.bnk_name,
                ota_name : this.state.ota_name,
                description : this.state.description
            }
            peoplesRef.push(member)
                this.setState({
                    user_id:'',
                    bnk_name:'',
                    ota_name:'',
                    description:''
                })
        }
    }

    commend(){
        var check = window.prompt("Input Key")
        if(check == 'bnk48'){
            this.setState({
                show: !this.state.show
            })
        }
        else{
            alert("Wrong Key You have not permission")
            this.setState({
                show: false
            })
        }
    }
    
    toggle1() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

// Profile member
    toggle2() {
        this.setState({
          detail1: !this.state.detail1
        });
    }
    toggle3() {
        this.setState({
          detail2: !this.state.detail2
        });
    }
    toggle4() {
        this.setState({
          detail3: !this.state.detail3
        });
    }
    toggle5() {
        this.setState({
          detail4: !this.state.detail4
        });
    }
    toggle6() {
        this.setState({
          detail5: !this.state.detail5
        });
    }
    toggle7() {
        this.setState({
          detail6: !this.state.detail6
        });
    }
    toggle8() {
        this.setState({
          detail7: !this.state.detail7
        });
    }
    toggle9() {
        this.setState({
          detail8: !this.state.detail8
        });
    }
    toggle10() {
        this.setState({
          detail9: !this.state.detail9
        });
    }
    toggle11() {
        this.setState({
          detail10: !this.state.detail10
        });
    }
    toggle12() {
        this.setState({
          detail11: !this.state.detail11
        });
    }
    toggle13() {
        this.setState({
          detail12: !this.state.detail12
        });
    }

//  description member  
    choose1(){
        this.setState(prevState => ({
            bnk1: !prevState.bnk1
        }));
        this.name = 'Cherprang'
    }
    choose2(){
        this.setState(prevState => ({
            bnk2: !prevState.bnk2
        }));
        this.name = 'Pun'
    }
    choose3(){
        this.setState(prevState => ({
            bnk3: !prevState.bnk3
        }));
        this.name = 'Music'
    }
    choose4(){
        this.setState(prevState => ({
            bnk4: !prevState.bnk4
        }));
        this.name = 'Noey'
    }
    choose5(){
        this.setState(prevState => ({
            bnk5: !prevState.bnk5
        }));
        this.name = 'Jannis'
    }
    choose6(){
        this.setState(prevState => ({
            bnk6: !prevState.bnk6
        }));
        this.name = 'Tarwaan'
    }
    choose7(){
        this.setState(prevState => ({
            bnk7: !prevState.bnk7
        }));
        this.name = 'Orn'
    }
    choose8(){
        this.setState(prevState => ({
            bnk8: !prevState.bnk8
        }));
        this.name = 'Jane'
    }
    choose9(){
        this.setState(prevState => ({
            bnk9: !prevState.bnk9
        }));
        this.name = 'Pupe'
    }
    choose10(){
        this.setState(prevState => ({
            bnk10: !prevState.bnk10
        }));
        this.name = 'Mobile'
    }
    choose11(){
        this.setState(prevState => ({
            bnk11: !prevState.bnk11
        }));
        this.name = 'Mewnich'
    }
    choose12(){
        this.setState(prevState => ({
            bnk12: !prevState.bnk12
        }));
        this.name = 'Khamin'
    }


    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }

    removeCommend(userId){
        const peoplesRef = firebase.database().ref('/peoples');
        peoplesRef.child(userId).remove();
    }
    
    next() {
      if (this.animating)  return;
      const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    previous() {
      if (this.animating) return;
      const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
      this.setState({ activeIndex: nextIndex });
    }
  
    goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({ activeIndex: newIndex });
    }


// show pages
    sMember(){
        this.setState({
            member: true,
            home : false
        })
    }

    sHome(){
        this.setState({
            member: false,
            home : true
        })
    }


    render() {

        var MEMBER={
            display: this.state.member ? "block" : "none"
        }
        var HOME={
            display: this.state.home ? "block" : "none"
        }
        var COMMEND={
            display: this.state.show ? "block" : "none"
        }

        const { activeIndex } = this.state;
  
        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });
    
        return (
            <div>
                <div>
                    <Navbar color="light" light expand="md">
                        <NavbarBrand onClick={this.sHome.bind(this)}>HOME</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink onClick={this.sMember.bind(this)}>MEMBER</NavLink>
                            </NavItem>
                        </Nav>
                    </Navbar>
                </div>
       
                <div className="text-center" style = {HOME}>
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                </div>
            
                <div style={MEMBER}>
                    <div className="container" style={{marginTop:20}}> 

                        <div class="row text-center">
                                   
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="http://stage48.net/wiki/images/f/f8/CherprangBIIIMar2019.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h2 class="card-text">Cherprang</h2>
                                    </div>
                                    <div className="row text-center"> 
                                        <div className="col-md-4">  
                                            <Button outline color="primary" onClick={this.choose1}>{this.props.buttonLabel}PICK ME!!</Button> 
                                        </div>
                                        <div className="col-md-4">     
                                            <Button id="Popover1" outline color="success" >
                                                    Profile
                                            </Button>
                                            <Popover placement="bottom" isOpen={this.state.detail1} target="Popover1" toggle={this.toggle2}>
                                                <PopoverHeader>Cherprang Areekul</PopoverHeader>
                                                <PopoverBody>   <p>ฉายา : แคปเฌอ.</p>
                                                                <p>วันเกิด : 2 พฤษภาคม 2539.</p>
                                                                <p>สีที่ชอบ : สีขาว.</p>
                                                                <p>สถานศึกษา : คณะวิทยาศาสตร์ สาขาวิชาเคมี หลักสูตรนานาชาติ มหาวิทยาลัยมหิดล.</p>
                                                                <p>IG : cherprang.bnk48official.</p>
                                                                <p>FB : @bnk48official.cherprang.</p>
                                                </PopoverBody>
                                            </Popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal isOpen={this.state.bnk1} toggle={this.choose1} className={this.props.className}>
                            <ModalHeader toggle={this.choose1}>{this.name}</ModalHeader>
                                <ModalBody>
                                        {this.state.bnk_name=this.name}
                                        <br></br>
                                        <form onSubmit={this.handleSubmit} onKeyPress={event => {
                                            if (event.which === 13) {
                                                event.preventDefault();
                                            }
                                        }}>
                    
                    
                                <div className="row" >
                                    <div className="col-8">
                                        <div className="form-row">
                                                <div className="col-4">
                                                    <input type="text" name="ota_name" className="form-control" placeholder="ota_name" onChange={this.handleChange} value={this.state.ota_name}/>
                                                </div>
                                                <br></br><br></br>
                                                <div className="col-12">
                                                    <textarea type="text" name="description" className="form-control" placeholder="description" onChange={this.handleChange} value={this.state.description}/>
                                                </div>
                                                <br></br><br></br><br></br>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary" onClick={this.choose1}>Save</button>
                                        </form>
                                </ModalBody>
                            </Modal>


                            <div className="col-md-3">
                                <div className="card">
                                    <img src="http://stage48.net/wiki/images/6/6f/PunBIIIMar2019.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h2 class="card-text">Pun</h2>
                                    </div>
                                    <div className="row text-center"> 
                                        <div className="col-md-4">  
                                            <Button outline color="primary" onClick={this.choose2}>{this.props.buttonLabel}PICK ME!!</Button> 
                                        </div>
                                        <div className="col-md-4"> 
                                            <Button id="Popover2" outline color="success">
                                                    Profile
                                            </Button>
                                            <Popover placement="bottom" isOpen={this.state.detail2} target="Popover2" toggle={this.toggle3}>
                                                <PopoverHeader>Punsikorn Tiyakorn</PopoverHeader>
                                                <PopoverBody>   <p>ฉายา : ฉลาม.</p>
                                                            <p>วันเกิด : 9 พฤศจิกายน 2543.</p>
                                                            <p>สีที่ชอบ : สีดำ.</p>
                                                            <p>สถานศึกษา : Stamford International University.</p>
                                                            <p>IG : pun.bnk48official.</p>
                                                            <p>FB : @bnk48official.pun.</p>
                                                </PopoverBody>
                                            </Popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal isOpen={this.state.bnk2} toggle={this.choose2} className={this.props.className}>
                                <ModalHeader toggle={this.choose2}>{this.name}</ModalHeader>
                                <ModalBody>
                                        {this.state.bnk_name=this.name}
                                        <br></br>
                                        <form onSubmit={this.handleSubmit} onKeyPress={event => {
                                            if (event.which === 13) {
                                                event.preventDefault();
                                            }
                                        }}>
                                <div className="row" >
                                    <div className="col-8">
                                        <div className="form-row">
                                            <div className="col-4">
                                                <input type="text" name="ota_name" className="form-control" placeholder="ota_name" onChange={this.handleChange} value={this.state.ota_name}/>
                                            </div>
                                            <br></br><br></br>
                                            <div className="col-12">
                                                <textarea type="text" name="description" className="form-control" placeholder="description" onChange={this.handleChange} value={this.state.description}/>
                                            </div>
                                            <br></br><br></br><br></br>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary" onClick={this.choose2}>Save</button>
                                        </form>
                                </ModalBody>
                            </Modal>

                            <div className="col-md-3">
                                <div className="card">
                                    <img src="http://stage48.net/wiki/images/0/02/MusicBIIIMar2019.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h2 class="card-text">Music</h2>
                                    </div>
                                    <div className="row text-center"> 
                                            <div className="col-md-4">  
                                                <Button outline color="primary" onClick={this.choose3}>{this.props.buttonLabel}PICK ME!!</Button> 
                                            </div>
                                            <div className="col-md-4">     
                                                <Button id="Popover3" outline color="success">
                                                        Profile
                                                </Button>
                                                <Popover placement="bottom" isOpen={this.state.detail3} target="Popover3" toggle={this.toggle4}>
                                                    <PopoverHeader>Praewa Suthamphong</PopoverHeader>
                                                    <PopoverBody>   <p>ฉายา : สิคกาจู.</p>
                                                                    <p>วันเกิด : 24 กุมภาพันธ์ 2544.</p>
                                                                    <p>สีที่ชอบ : สีคู่ตรงข้าม.</p>
                                                                    <p>สถานศึกษา : เคยศึกษาที่โรงเรียนวัฒนาวิทยาลัย ปัจจุบันออกมาสอบ GED (การสอบที่เทียบเท่ากับวุฒิการศึกษาระดับมัธยมปลายในประเทศไทย ตามหลักสูตรการศึกษาของสหรัฐอเมริกา).</p>
                                                                    <p>IG : music.bnk48official.</p>
                                                                    <p>FB : @bnk48official.music.</p>
                                                    </PopoverBody>
                                                </Popover>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <Modal isOpen={this.state.bnk3} toggle={this.choose3} className={this.props.className}>
                                <ModalHeader toggle={this.choose3}>{this.name}</ModalHeader>
                                    <ModalBody>
                                        {this.state.bnk_name=this.name}
                                        <br></br>
                                            <form onSubmit={this.handleSubmit} onKeyPress={event => {
                                                if (event.which === 13) {
                                                    event.preventDefault();
                                                }
                                            }}>
                                        <div className="row" >
                                            <div className="col-8">
                                                <div className="form-row">
                                                    <div className="col-4">
                                                            <input type="text" name="ota_name" className="form-control" placeholder="ota_name" onChange={this.handleChange} value={this.state.ota_name}/>
                                                    </div>
                                                    <br></br><br></br>
                                                    <div className="col-12">
                                                            <textarea type="text" name="description" className="form-control" placeholder="description" onChange={this.handleChange} value={this.state.description}/>
                                                    </div>
                                                    <br></br><br></br><br></br>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary" onClick={this.choose3}>Save</button>
                                            </form>
                                </ModalBody>
                            </Modal>

                
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="http://stage48.net/wiki/images/6/61/NoeyBIIIMar2019.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h2 class="card-text">Noey</h2>
                                    </div>
                                    <div className="row text-center"> 
                                            <div className="col-md-4">  
                                                <Button outline color="primary" onClick={this.choose4}>{this.props.buttonLabel}PICK ME!!</Button> 
                                            </div>
                                            <div className="col-md-4">     
                                                <Button id="Popover4" outline color="success">
                                                            Profile
                                                </Button>
                                                <Popover placement="bottom" isOpen={this.state.detail4} target="Popover4" toggle={this.toggle5}>
                                                    <PopoverHeader>Kanteera Wadcharathadsanakul</PopoverHeader>
                                                    <PopoverBody>   <p>ฉายา : คุณอ๊บ.</p>
                                                                    <p>วันเกิด : 9 เมษายน 2540.</p>
                                                                    <p>สีที่ชอบ : เขียวเบบี้บลู.</p>
                                                                    <p>สถานศึกษา : มหาวิทยาลัยพระจอมเกล้าลาดกระบัง คณะวิทยาศาสตร์ สาขาจุลชีววิทยาอุตสาหกรรม.</p>
                                                                    <p>IG : noey.bnk48office.</p>
                                                                    <p>FB : @bnk48official.noey.</p>
                                                    </PopoverBody>
                                                </Popover>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <Modal isOpen={this.state.bnk4} toggle={this.choose4} className={this.props.className}>
                                <ModalHeader toggle={this.choose4}>{this.name}</ModalHeader>
                                    <ModalBody>
                                        {this.state.bnk_name=this.name}
                                        <br></br>
                                            <form onSubmit={this.handleSubmit} onKeyPress={event => {
                                                if (event.which === 13) {
                                                    event.preventDefault();
                                                }
                                            }}>
                                        <div className="row" >
                                            <div className="col-8">
                                                <div className="form-row">
                                                    <div className="col-4">
                                                        <input type="text" name="ota_name" className="form-control" placeholder="ota_name" onChange={this.handleChange} value={this.state.ota_name}/>
                                                    </div>
                                                    <br></br><br></br>
                                                    <div className="col-12">
                                                        <textarea type="text" name="description" className="form-control" placeholder="description" onChange={this.handleChange} value={this.state.description}/>
                                                    </div>
                                                    <br></br><br></br><br></br>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary" onClick={this.choose4}>Save</button>
                                            </form>
                                    </ModalBody>
                            </Modal>



                            <div className="col-md-3">
                                <div className="card">
                                    <img src="http://stage48.net/wiki/images/2/29/JennisBIIIMar2019.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h2 class="card-text">Jennis</h2>
                                    </div>
                                    <div className="row text-center"> 
                                            <div className="col-md-4">  
                                                <Button outline color="primary" onClick={this.choose5}>{this.props.buttonLabel}PICK ME!!</Button> 
                                            </div>
                                            <div className="col-md-4">     
                                                <Button id="Popover5" outline color="success">
                                                        Profile
                                                </Button>
                                                <Popover placement="bottom" isOpen={this.state.detail5} target="Popover5" toggle={this.toggle6}>
                                                    <PopoverHeader>Jennis Oprasert</PopoverHeader>
                                                    <PopoverBody>   <p>ฉายา : ลูกพี่,จอนอ.</p>
                                                                    <p>วันเกิด : 4 กรกฏาคม 2543.</p>
                                                                    <p>สถานศึกษา : Singapore International School of Bangkok.</p>
                                                                    <p>IG : jennis.bnk48official.</p>
                                                                    <p>FB : @bnk48official.jennis.</p>
                                                    </PopoverBody>
                                                </Popover>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <Modal isOpen={this.state.bnk5} toggle={this.choose5} className={this.props.className}>
                                <ModalHeader toggle={this.choose5}>{this.name}</ModalHeader>
                                        <ModalBody>
                                            {this.state.bnk_name=this.name}
                                            <br></br>
                                                <form onSubmit={this.handleSubmit} onKeyPress={event => {
                                                    if (event.which === 13) {
                                                        event.preventDefault();
                                                    }
                                                }}>
                                            <div className="row" >
                                                <div className="col-8">
                                                    <div className="form-row">
                                                        <div className="col-4">
                                                            <input type="text" name="ota_name" className="form-control" placeholder="ota_name" onChange={this.handleChange} value={this.state.ota_name}/>
                                                        </div>
                                                        <br></br><br></br>
                                                        <div className="col-12">
                                                            <textarea type="text" name="description" className="form-control" placeholder="description" onChange={this.handleChange} value={this.state.description}/>
                                                        </div>
                                                        <br></br><br></br><br></br>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-primary" onClick={this.choose5}>Save</button>
                                                </form>
                                        </ModalBody>
                            </Modal>



                            <div className="col-md-3">
                                <div className="card">
                                    <img src="http://stage48.net/wiki/images/3/38/TarwaanBIIIMar2019.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h2 class="card-text">Tarwaan</h2>
                                    </div>
                                    <div className="row text-center"> 
                                            <div className="col-md-4">  
                                                <Button outline color="primary" onClick={this.choose6}>{this.props.buttonLabel}PICK ME!!</Button> 
                                            </div>
                                            <div className="col-md-4">     
                                                <Button id="Popover6" outline color="success">
                                                        Profile
                                                </Button>
                                                <Popover placement="bottom" isOpen={this.state.detail6} target="Popover6" toggle={this.toggle7}>
                                                    <PopoverHeader>Isarapa Thawatpakdee</PopoverHeader>
                                                    <PopoverBody>   <p>ฉายา : แม่บ้านประจำวง.</p>
                                                                    <p>วันเกิด : 18 ธันวาคม 2539.</p>
                                                                    <p>สีที่ชอบ : สีเหลือง.</p>
                                                                    <p>สถานศึกษา : คณะอักษรศาสตร์ เอกภาษาเกาหลี มหาวิทยาลัยศิลปากร.</p>
                                                                    <p>IG : tarwaan.bnk48official.</p>
                                                                    <p>FB : @bnk48official.tarwaan.</p>
                                                    </PopoverBody>
                                                </Popover>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <Modal isOpen={this.state.bnk6} toggle={this.choose6} className={this.props.className}>
                                <ModalHeader toggle={this.choose6}>{this.name}</ModalHeader>
                                    <ModalBody>
                                        {this.state.bnk_name=this.name}
                                        <br></br>
                                            <form onSubmit={this.handleSubmit} onKeyPress={event => {
                                                if (event.which === 13) {
                                                    event.preventDefault();
                                                }
                                            }}>
                                        <div className="row" >
                                            <div className="col-8">
                                                <div className="form-row">
                                                    <div className="col-4">
                                                        <input type="text" name="ota_name" className="form-control" placeholder="ota_name" onChange={this.handleChange} value={this.state.ota_name}/>
                                                    </div>
                                                    <br></br><br></br>
                                                    <div className="col-12">
                                                        <textarea type="text" name="description" className="form-control" placeholder="description" onChange={this.handleChange} value={this.state.description}/>
                                                    </div>
                                                    <br></br><br></br><br></br>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary" onClick={this.choose6}>Save</button>
                                            </form>
                                </ModalBody>
                            </Modal>

                            
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="http://stage48.net/wiki/images/4/4e/OrnBIIIMar2019.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h2 class="card-text">Orn</h2>
                                    </div>
                                    <div className="row text-center"> 
                                        <div className="col-md-4">  
                                        <Button outline color="primary" onClick={this.choose7}>{this.props.buttonLabel}PICK ME!!</Button> 
                                        </div>
                                        <div className="col-md-4">     
                                            <Button id="Popover7" outline color="success">
                                                    Profile
                                            </Button>
                                            <Popover placement="bottom" isOpen={this.state.detail7} target="Popover7" toggle={this.toggle8}>
                                                <PopoverHeader>Patchanan Jiajirachote</PopoverHeader>
                                                    <PopoverBody>   <p>ฉายา : อุ๋ง.</p>
                                                                    <p>วันเกิด : 3 กุมภาพันธ์ 2540.</p>
                                                                    <p>สีที่ชอบ : สีฟ้า.</p>
                                                                    <p>สถานศึกษา : Chanapatana International Design Institute.</p>
                                                                    <p>IG : orn.bnk48official.</p>
                                                                    <p>FB : @bnk48official.orn.</p>
                                                    </PopoverBody>
                                                </Popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal isOpen={this.state.bnk7} toggle={this.choose7} className={this.props.className}>
                                <ModalHeader toggle={this.choose7}>{this.name}</ModalHeader>
                                <ModalBody>
                                        {this.state.bnk_name=this.name}
                                        <br></br>
                                            <form onSubmit={this.handleSubmit} onKeyPress={event => {
                                                if (event.which === 13) {
                                                    event.preventDefault();
                                                }
                                            }}>
                                        <div className="row" >
                                            <div className="col-8">
                                                <div className="form-row">
                                                    <div className="col-4">
                                                        <input type="text" name="ota_name" className="form-control" placeholder="ota_name" onChange={this.handleChange} value={this.state.ota_name}/>
                                                    </div>
                                                    <br></br><br></br>
                                                    <div className="col-12">
                                                        <textarea type="text" name="description" className="form-control" placeholder="description" onChange={this.handleChange} value={this.state.description}/>
                                                    </div>
                                                    <br></br><br></br><br></br>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary" onClick={this.choose7}>Save</button>
                                            </form>
                                </ModalBody>
                            </Modal>


                            <div className="col-md-3">
                                <div className="card">
                                    <img src="http://stage48.net/wiki/images/a/a6/JaneBIIIMar2019.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h2 class="card-text">Jane</h2>
                                    </div>
                                    <div className="row text-center"> 
                                        <div className="col-md-4">  
                                            <Button outline color="primary" onClick={this.choose8}>{this.props.buttonLabel}PICK ME!!</Button> 
                                        </div>
                                        <div className="col-md-4">     
                                            <Button id="Popover8" outline color="success">
                                                    Profile
                                            </Button>
                                            <Popover placement="bottom" isOpen={this.state.detail8} target="Popover8" toggle={this.toggle9}>
                                                <PopoverHeader>Kunjiranut Intarasin</PopoverHeader>
                                                    <PopoverBody>   <p>ฉายา : สล็อต.</p>
                                                                    <p>วันเกิด : 23 มีนาคม 2543.</p>
                                                                    <p>สถานศึกษา : โรงเรียนพระหฤทัยนนทบุรี.</p>
                                                                    <p>IG : jane.bnk48official.</p>
                                                                    <p>FB : @bnk48official.jane.</p>
                                                    </PopoverBody>
                                            </Popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal isOpen={this.state.bnk8} toggle={this.choose8} className={this.props.className}>
                                <ModalHeader toggle={this.choose8}>{this.name}</ModalHeader>
                                    <ModalBody>
                                        {this.state.bnk_name=this.name}
                                        <br></br>
                                            <form onSubmit={this.handleSubmit} onKeyPress={event => {
                                                if (event.which === 13) {
                                                    event.preventDefault();
                                                }
                                            }}>
                                        <div className="row" >
                                            <div className="col-8">
                                                <div className="form-row">
                                                    <div className="col-4">
                                                        <input type="text" name="ota_name" className="form-control" placeholder="ota_name" onChange={this.handleChange} value={this.state.ota_name}/>
                                                    </div>
                                                    <br></br><br></br>
                                                    <div className="col-12">
                                                        <textarea type="text" name="description" className="form-control" placeholder="description" onChange={this.handleChange} value={this.state.description}/>
                                                    </div>
                                                    <br></br><br></br><br></br>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary" onClick={this.choose8}>Save</button>
                                            </form>
                                    </ModalBody>
                            </Modal>


                            
                            <div className="col-md-3">
                                <div className="card">
                                    <img src="http://stage48.net/wiki/images/4/41/PupeBIIIMar2019.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h2 class="card-text">Pupe</h2>
                                    </div>
                                    <div className="row text-center"> 
                                        <div className="col-md-4">  
                                            <Button outline color="primary" onClick={this.choose9}>{this.props.buttonLabel}PICK ME!!</Button> 
                                        </div>
                                        <div className="col-md-4">     
                                            <Button id="Popover9" outline color="success">
                                                Profile
                                            </Button>
                                            <Popover placement="bottom" isOpen={this.state.detail9} target="Popover9" toggle={this.toggle10}>
                                                <PopoverHeader>Jiradapa Intajak</PopoverHeader>
                                                    <PopoverBody>   <p>ฉายา : บอส.</p>
                                                                    <p>วันเกิด : 18 มกราคม 2541.</p>
                                                                    <p>สีที่ชอบ : สีชมพู.</p>
                                                                    <p>สถานศึกษา : มหาวิทยาลัยราชภัฏสวนสุนันทา.</p>
                                                                    <p>IG : pupe.bnk48official.</p>
                                                                    <p>FB : @bnk48official.pupe.</p>
                                                    </PopoverBody>
                                            </Popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal isOpen={this.state.bnk9} toggle={this.choose9} className={this.props.className}>
                                <ModalHeader toggle={this.choose9}>{this.name}</ModalHeader>
                                    <ModalBody>
                                                {this.state.bnk_name=this.name}
                                                <br></br>
                                                    <form onSubmit={this.handleSubmit} onKeyPress={event => {
                                                        if (event.which === 13) {
                                                            event.preventDefault();
                                                        }
                                                    }}>                   
                                                <div className="row" >
                                                    <div className="col-8">
                                                        <div className="form-row">
                                                            <div className="col-4">
                                                                <input type="text" name="ota_name" className="form-control" placeholder="ota_name" onChange={this.handleChange} value={this.state.ota_name}/>
                                                            </div>
                                                            <br></br><br></br>
                                                            <div className="col-12">
                                                                <textarea type="text" name="description" className="form-control" placeholder="description" onChange={this.handleChange} value={this.state.description}/>
                                                            </div>                        
                                                            <br></br><br></br><br></br>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" class="btn btn-primary" onClick={this.choose9}>Save</button>
                                                    </form>
                                    </ModalBody>
                            </Modal>


                            <div className="col-md-3">
                                <div className="card">
                                    <img src="http://stage48.net/wiki/images/e/ec/MobileBIIIMar2019.jpg" class="card-img-top" alt="..."/>
                                    <div class="card-body">
                                        <h2 class="card-text">Mobile</h2>
                                    </div>
                                    <div className="row text-center"> 
                                        <div className="col-md-4">  
                                            <Button outline color="primary" onClick={this.choose10}>{this.props.buttonLabel}PICK ME!!</Button> 
                                        </div>
                                        <div className="col-md-4">     
                                            <Button id="Popover10" outline color="success">
                                                Profile
                                            </Button>
                                            <Popover placement="bottom" isOpen={this.state.detail10} target="Popover10" toggle={this.toggle11}>
                                                <PopoverHeader>Pimrapat Phadungwatanachok</PopoverHeader>
                                                    <PopoverBody>   <p>ฉายา : ตู้เพลงโมบิล.</p>
                                                                    <p>วันเกิด : 9 กรกฏาคม 2545.</p>
                                                                    <p>สีที่ชอบ : สีชมพู.</p>
                                                                    <p>สถานศึกษา : กำลังรอสมัครการศึกษานอกระบบ.</p>
                                                                    <p>IG : mobile.bnk48official.</p>
                                                                    <p>FB : @bnk48official.mobile.</p>
                                                    </PopoverBody>
                                            </Popover>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Modal isOpen={this.state.bnk10} toggle={this.choose10} className={this.props.className}>
                                <ModalHeader toggle={this.choose10}>{this.name}</ModalHeader>
                                    <ModalBody>
                                        {this.state.bnk_name=this.name}
                                        <br></br>
                                            <form onSubmit={this.handleSubmit} onKeyPress={event => {
                                                if (event.which === 13) {
                                                    event.preventDefault();
                                                }
                                            }}>                
                                        <div className="row" >      
                                            <div className="col-8">
                                                <div className="form-row">
                                                    <div className="col-4">
                                                        <input type="text" name="ota_name" className="form-control" placeholder="ota_name" onChange={this.handleChange} value={this.state.ota_name}/>
                                                    </div>
                                                    <br></br><br></br>
                                                    <div className="col-12">
                                                        <textarea type="text" name="description" className="form-control" placeholder="description" onChange={this.handleChange} value={this.state.description}/>
                                                    </div>                        
                                                    <br></br><br></br><br></br>
                                                </div>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary" onClick={this.choose10}>Save</button>
                                            </form>
                                </ModalBody>
                            </Modal>


                            <div className="col-md-3">
                                <div className="card">
                                    <img src="http://stage48.net/wiki/images/8/89/MewnichBNKTraineeMar2019.jpg" class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h2 class="card-text">Mewnich</h2>
                                        </div>
                                        <div className="row text-center"> 
                                            <div className="col-md-4">  
                                                <Button outline color="primary" onClick={this.choose11}>{this.props.buttonLabel}PICK ME!!</Button> 
                                            </div>
                                            <div className="col-md-4">     
                                                <Button id="Popover11" outline color="success">
                                                        Profile
                                                </Button>
                                                <Popover placement="bottom" isOpen={this.state.detail11} target="Popover11" toggle={this.toggle12}>
                                                    <PopoverHeader>Nannaphas Loetnamchoetsakun</PopoverHeader>
                                                        <PopoverBody>  
                                                                    <p>วันเกิด : 11 มีนาคม 2545.</p>
                                                                    <p>งานอดิเรก : ทำอาหาร, ทำขนม, ดูซีรีย์.</p>
                                                                    <p>IG : mewnich.bnk48official.</p>
                                                                    <p>FB : @bnk48official.mewnich.</p>
                                                        </PopoverBody>
                                                </Popover>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <Modal isOpen={this.state.bnk11} toggle={this.choose11} className={this.props.className}>
                                <ModalHeader toggle={this.choose11}>{this.name}</ModalHeader>
                                    <ModalBody>
                                            {this.state.bnk_name=this.name}
                                            <br></br>
                                                <form onSubmit={this.handleSubmit} onKeyPress={event => {
                                                    if (event.which === 13) {
                                                        event.preventDefault();
                                                    }
                                                }}>
                                            <div className="row" >
                                                <div className="col-8">
                                                    <div className="form-row">
                                                        <div className="col-4">
                                                            <input type="text" name="ota_name" className="form-control" placeholder="ota_name" onChange={this.handleChange} value={this.state.ota_name}/>
                                                        </div>
                                                        <br></br><br></br>
                                                        <div className="col-12">
                                                            <textarea type="text" name="description" className="form-control" placeholder="description" onChange={this.handleChange} value={this.state.description}/>
                                                        </div>                        
                                                        <br></br><br></br><br></br>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-primary" onClick={this.choose11}>Save</button>
                                                </form>
                                </ModalBody>
                            </Modal>


                            <div className="col-md-3">
                                <div className="card">
                                    <img src="http://stage48.net/wiki/images/9/99/KhaminBNKTraineeMar2019.jpg" class="card-img-top" alt="..."/>
                                        <div class="card-body">
                                            <h2 class="card-text">Khamin</h2>
                                        </div>
                                        <div className="row text-center"> 
                                            <div className="col-md-4">  
                                                <Button outline color="primary" onClick={this.choose12}>{this.props.buttonLabel}PICK ME!!</Button> 
                                            </div>
                                            <div className="col-md-4">     
                                                <Button id="Popover12" outline color="success">
                                                    Profile
                                                </Button>
                                                <Popover placement="bottom" isOpen={this.state.detail12} target="Popover12" toggle={this.toggle13}>
                                                    <PopoverHeader>Manipa Roopanya</PopoverHeader>
                                                        <PopoverBody>   
                                                                    <p>วันเกิด : 23 เมษายน 2542.</p>
                                                                    <p>งานอดิเรก : ฟังเพลง อ่านหนังสือ.</p>
                                                                    <p>IG : khamin.bnk48official.</p>
                                                                    <p>FB : @bnk48official.khamin.</p>
                                                        </PopoverBody>
                                                </Popover>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <Modal isOpen={this.state.bnk12} toggle={this.choose12} className={this.props.className}>
                                <ModalHeader toggle={this.choose12}>{this.name}</ModalHeader>
                                    <ModalBody>
                                            {this.state.bnk_name=this.name}
                                            <br></br>
                                                <form onSubmit={this.handleSubmit} onKeyPress={event => {
                                                    if (event.which === 13) {
                                                        event.preventDefault();
                                                    }
                                                }}>                
                                            <div className="row">      
                                                <div className="col-8">
                                                    <div className="form-row">
                                                        <div className="col-4">
                                                            <input type="text" name="ota_name" className="form-control" placeholder="ota_name" onChange={this.handleChange} value={this.state.ota_name}/>
                                                        </div>
                                                        <br></br><br></br>
                                                        <div className="col-12">
                                                            <textarea type="text" name="description" className="form-control" placeholder="description" onChange={this.handleChange} value={this.state.description}/>
                                                        </div>                        
                                                        <br></br><br></br><br></br>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="submit" class="btn btn-primary" onClick={this.choose12}>Save</button>
                                                </form>
                                    </ModalBody>
                            </Modal>
                        </div>
                    </div>
                </div>
                <Button color="danger" onClick={this.commend}>Show Commend</Button>    
                <div style={COMMEND}>
                    <table className="table table-hover">
                        <tr className="thead-light">
                        <th width="20%">bnk_name</th>
                        <th width="20%">ota_name</th>
                        <th width="55%">description</th>
                        <th width="5%">Delete</th>
                        </tr>
                        {
                            this.state.peoples.map((member) => {
                            return (
                                <tr>
                                    <td>{member.bnk_name}</td>
                                    <td>{member.ota_name}</td>
                                    <td>{member.description}</td>
                                    <td><button className="btn btn-danger btn-md" onClick={() => this.removeCommend(member.user_id)}>Delete</button></td>
                                </tr>
                            )
                            })
                        }
                    </table>
                </div>
            </div>
        );
    }
}
export default App;