import Flow from "./flow";

function MasterUser() {
	return (
    <div className="page-wrapper">
     
       {/*HEADER MOBILE*/}
        <header className="header-mobile d-block d-lg-none">
            <div className="header-mobile__bar">
                <div className="container-fluid">
                    <div className="header-mobile-inner">
                        <a className="logo" href="index.html">
                            <img src="images/icon/logo.png" alt="CoolAdmin" />
                        </a>
                        <button className="hamburger hamburger--slider" type="button">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <nav className="navbar-mobile">
                <div className="container-fluid">
                    <ul className="navbar-mobile__list list-unstyled">
                        <li className="has-sub">
                            <a className="js-arrow" href="#">
                                <i className="fas fa-tachometer-alt"></i>Dashboard</a>
                            <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                <li>
                                    <a href="index.html">Dashboard 1</a>
                                </li>
                                <li>
                                    <a href="index2.html">Dashboard 2</a>
                                </li>
                                <li>
                                    <a href="index3.html">Dashboard 3</a>
                                </li>
                                <li>
                                    <a href="index4.html">Dashboard 4</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="chart.html">
                                <i className="fas fa-chart-bar"></i>Charts</a>
                        </li>
                        <li>
                            <a href="table.html">
                                <i className="fas fa-table"></i>Tables</a>
                        </li>
                        <li>
                            <a href="form.html">
                                <i className="far fa-check-square"></i>Forms</a>
                        </li>
                        <li>
                            <a href="calendar.html">
                                <i className="fas fa-calendar-alt"></i>Calendar</a>
                        </li>
                        <li>
                            <a href="map.html">
                                <i className="fas fa-map-marker-alt"></i>Maps</a>
                        </li>
                        <li className="has-sub">
                            <a className="js-arrow" href="#">
                                <i className="fas fa-copy"></i>Pages</a>
                            <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                <li>
                                    <a href="login.html">Login</a>
                                </li>
                                <li>
                                    <a href="register.html">Register</a>
                                </li>
                                <li>
                                    <a href="forget-pass.html">Forget Password</a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub">
                            <a className="js-arrow" href="#">
                                <i className="fas fa-desktop"></i>UI Elements</a>
                            <ul className="navbar-mobile-sub__list list-unstyled js-sub-list">
                                <li>
                                    <a href="button.html">Button</a>
                                </li>
                                <li>
                                    <a href="badge.html">Badges</a>
                                </li>
                                <li>
                                    <a href="tab.html">Tabs</a>
                                </li>
                                <li>
                                    <a href="card.html">Cards</a>
                                </li>
                                <li>
                                    <a href="alert.html">Alerts</a>
                                </li>
                                <li>
                                    <a href="progress-bar.html">Progress Bars</a>
                                </li>
                                <li>
                                    <a href="modal.html">Modals</a>
                                </li>
                                <li>
                                    <a href="switch.html">Switchs</a>
                                </li>
                                <li>
                                    <a href="grid.html">Grids</a>
                                </li>
                                <li>
                                    <a href="fontawesome.html">Fontawesome Icon</a>
                                </li>
                                <li>
                                    <a href="typo.html">Typography</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
         {/* END HEADER MOBILE*/}

         {/* MENU SIDEBAR*/}
        <aside className="menu-sidebar d-none d-lg-block">
            <div className="logo">
                <a href="#">
                    <img src="images/icon/logo.png" alt="Cool Admin" />
                </a>
            </div>
            <div className="menu-sidebar__content js-scrollbar1">
                <nav className="navbar-sidebar">
                    <ul className="list-unstyled navbar__list">
                        <li className="active has-sub">
                            <a className="js-arrow" href="#">
                                <i className="fas fa-tachometer-alt"></i>Dashboard</a>
                            <ul className="list-unstyled navbar__sub-list js-sub-list">
                                <li>
                                    <a href="index.html">Dashboard 1</a>
                                </li>
                                <li>
                                    <a href="index2.html">Dashboard 2</a>
                                </li>
                                <li>
                                    <a href="index3.html">Dashboard 3</a>
                                </li>
                                <li>
                                    <a href="index4.html">Dashboard 4</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="chart.html">
                                <i className="fas fa-chart-bar"></i>Charts</a>
                        </li>
                        <li>
                            <a href="table.html">
                                <i className="fas fa-table"></i>Tables</a>
                        </li>
                        <li>
                            <a href="form.html">
                                <i className="far fa-check-square"></i>Forms</a>
                        </li>
                        <li>
                            <a href="calendar.html">
                                <i className="fas fa-calendar-alt"></i>Calendar</a>
                        </li>
                        <li>
                            <a href="map.html">
                                <i className="fas fa-map-marker-alt"></i>Maps</a>
                        </li>
                        <li className="has-sub">
                            <a className="js-arrow" href="#">
                                <i className="fas fa-copy"></i>Pages</a>
                            <ul className="list-unstyled navbar__sub-list js-sub-list">
                                <li>
                                    <a href="login.html">Login</a>
                                </li>
                                <li>
                                    <a href="register.html">Register</a>
                                </li>
                                <li>
                                    <a href="forget-pass.html">Forget Password</a>
                                </li>
                            </ul>
                        </li>
                        <li className="has-sub">
                            <a className="js-arrow" href="#">
                                <i className="fas fa-desktop"></i>UI Elements</a>
                            <ul className="list-unstyled navbar__sub-list js-sub-list">
                                <li>
                                    <a href="button.html">Button</a>
                                </li>
                                <li>
                                    <a href="badge.html">Badges</a>
                                </li>
                                <li>
                                    <a href="tab.html">Tabs</a>
                                </li>
                                <li>
                                    <a href="card.html">Cards</a>
                                </li>
                                <li>
                                    <a href="alert.html">Alerts</a>
                                </li>
                                <li>
                                    <a href="progress-bar.html">Progress Bars</a>
                                </li>
                                <li>
                                    <a href="modal.html">Modals</a>
                                </li>
                                <li>
                                    <a href="switch.html">Switchs</a>
                                </li>
                                <li>
                                    <a href="grid.html">Grids</a>
                                </li>
                                <li>
                                    <a href="fontawesome.html">Fontawesome Icon</a>
                                </li>
                                <li>
                                    <a href="typo.html">Typography</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
         {/* END MENU SIDEBAR*/}

         {/* PAGE CONTAINER*/}
        <div className="page-container">
             {/* HEADER DESKTOP*/}
            <header className="header-desktop">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="header-wrap">
                            <form className="form-header" action="" method="POST">
                                <input className="au-input au-input--xl" type="text" name="search" placeholder="Search for datas &amp; reports..." />
                                <button className="au-btn--submit" type="submit">
                                    <i className="zmdi zmdi-search"></i>
                                </button>
                            </form>
                            <div className="header-button">
                                <div className="noti-wrap">
                                    <div className="noti__item js-item-menu">
                                        <i className="zmdi zmdi-comment-more"></i>
                                        <span className="quantity">1</span>
                                        <div className="mess-dropdown js-dropdown">
                                            <div className="mess__title">
                                                <p>You have 2 news message</p>
                                            </div>
                                            <div className="mess__item">
                                                <div className="image img-cir img-40">
                                                    <img src="images/icon/avatar-06.jpg" alt="Michelle Moreno" />
                                                </div>
                                                <div className="content">
                                                    <h6>Michelle Moreno</h6>
                                                    <p>Have sent a photo</p>
                                                    <span className="time">3 min ago</span>
                                                </div>
                                            </div>
                                            <div className="mess__item">
                                                <div className="image img-cir img-40">
                                                    <img src="images/icon/avatar-04.jpg" alt="Diane Myers" />
                                                </div>
                                                <div className="content">
                                                    <h6>Diane Myers</h6>
                                                    <p>You are now connected on message</p>
                                                    <span className="time">Yesterday</span>
                                                </div>
                                            </div>
                                            <div className="mess__footer">
                                                <a href="#">View all messages</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="noti__item js-item-menu">
                                        <i className="zmdi zmdi-email"></i>
                                        <span className="quantity">1</span>
                                        <div className="email-dropdown js-dropdown">
                                            <div className="email__title">
                                                <p>You have 3 New Emails</p>
                                            </div>
                                            <div className="email__item">
                                                <div className="image img-cir img-40">
                                                    <img src="images/icon/avatar-06.jpg" alt="Cynthia Harvey" />
                                                </div>
                                                <div className="content">
                                                    <p>Meeting about new dashboard...</p>
                                                    <span>Cynthia Harvey, 3 min ago</span>
                                                </div>
                                            </div>
                                            <div className="email__item">
                                                <div className="image img-cir img-40">
                                                    <img src="images/icon/avatar-05.jpg" alt="Cynthia Harvey" />
                                                </div>
                                                <div className="content">
                                                    <p>Meeting about new dashboard...</p>
                                                    <span>Cynthia Harvey, Yesterday</span>
                                                </div>
                                            </div>
                                            <div className="email__item">
                                                <div className="image img-cir img-40">
                                                    <img src="images/icon/avatar-04.jpg" alt="Cynthia Harvey" />
                                                </div>
                                                <div className="content">
                                                    <p>Meeting about new dashboard...</p>
                                                    <span>Cynthia Harvey, April 12,,2018</span>
                                                </div>
                                            </div>
                                            <div className="email__footer">
                                                <a href="#">See all emails</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="noti__item js-item-menu">
                                        <i className="zmdi zmdi-notifications"></i>
                                        <span className="quantity">3</span>
                                        <div className="notifi-dropdown js-dropdown">
                                            <div className="notifi__title">
                                                <p>You have 3 Notifications</p>
                                            </div>
                                            <div className="notifi__item">
                                                <div className="bg-c1 img-cir img-40">
                                                    <i className="zmdi zmdi-email-open"></i>
                                                </div>
                                                <div className="content">
                                                    <p>You got a email notification</p>
                                                    <span className="date">April 12, 2018 06:50</span>
                                                </div>
                                            </div>
                                            <div className="notifi__item">
                                                <div className="bg-c2 img-cir img-40">
                                                    <i className="zmdi zmdi-account-box"></i>
                                                </div>
                                                <div className="content">
                                                    <p>Your account has been blocked</p>
                                                    <span className="date">April 12, 2018 06:50</span>
                                                </div>
                                            </div>
                                            <div className="notifi__item">
                                                <div className="bg-c3 img-cir img-40">
                                                    <i className="zmdi zmdi-file-text"></i>
                                                </div>
                                                <div className="content">
                                                    <p>You got a new file</p>
                                                    <span className="date">April 12, 2018 06:50</span>
                                                </div>
                                            </div>
                                            <div className="notifi__footer">
                                                <a href="#">All notifications</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="account-wrap">
                                    <div className="account-item clearfix js-item-menu">
                                        <div className="image">
                                            <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                        </div>
                                        <div className="content">
                                            <a className="js-acc-btn" href="#">john doe</a>
                                        </div>
                                        <div className="account-dropdown js-dropdown">
                                            <div className="info clearfix">
                                                <div className="image">
                                                    <a href="#">
                                                        <img src="images/icon/avatar-01.jpg" alt="John Doe" />
                                                    </a>
                                                </div>
                                                <div className="content">
                                                    <h5 className="name">
                                                        <a href="#">john doe</a>
                                                    </h5>
                                                    <span className="email">johndoe@example.com</span>
                                                </div>
                                            </div>
                                            <div className="account-dropdown__body">
                                                <div className="account-dropdown__item">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-account"></i>Account</a>
                                                </div>
                                                <div className="account-dropdown__item">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-settings"></i>Setting</a>
                                                </div>
                                                <div className="account-dropdown__item">
                                                    <a href="#">
                                                        <i className="zmdi zmdi-money-box"></i>Billing</a>
                                                </div>
                                            </div>
                                            <div className="account-dropdown__footer">
                                                <a href="#">
                                                    <i className="zmdi zmdi-power"></i>Logout</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
             {/* HEADER DESKTOP*/}

             {/* MAIN CONTENT*/}
            <div className="main-content">
                <div className="section__content section__content--p30">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="overview-wrap">
                                    <h2 className="title-1">overview</h2>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="row m-t-25">
                            <div className="col-sm-6 col-lg-3">
                                <div className="overview-item overview-item--c1">
                                    <div className="overview__inner">
                                        <div className="overview-box clearfix">
                                            <div className="icon">
                                                <i className="zmdi zmdi-account-o"></i>
                                            </div>
                                            <div className="text">
                                                <h2>10368</h2>
                                                <span>members online</span>
                                            </div>
                                        </div>
                                        <div className="overview-chart">
                                            <canvas id="widgetChart1"></canvas>
                                        </div>
                                    </div>
                                </div>
                                <Flow />
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="overview-item overview-item--c2">
                                    <div className="overview__inner">
                                        <div className="overview-box clearfix">
                                            <div className="icon">
                                                <i className="zmdi zmdi-shopping-cart"></i>
                                            </div>
                                            <div className="text">
                                                <h2>388,688</h2>
                                                <span>items solid</span>
                                            </div>
                                        </div>
                                        <div className="overview-chart">
                                            <canvas id="widgetChart2"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="overview-item overview-item--c3">
                                    <div className="overview__inner">
                                        <div className="overview-box clearfix">
                                            <div className="icon">
                                                <i className="zmdi zmdi-calendar-note"></i>
                                            </div>
                                            <div className="text">
                                                <h2>1,086</h2>
                                                <span>this week</span>
                                            </div>
                                        </div>
                                        <div className="overview-chart">
                                            <canvas id="widgetChart3"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                <div className="overview-item overview-item--c4">
                                    <div className="overview__inner">
                                        <div className="overview-box clearfix">
                                            <div className="icon">
                                                <i className="zmdi zmdi-money"></i>
                                            </div>
                                            <div className="text">
                                                <h2>$1,060,386</h2>
                                                <span>total earnings</span>
                                            </div>
                                        </div>
                                        <div className="overview-chart">
                                            <canvas id="widgetChart4"></canvas>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="au-card recent-report">
                                    <div className="au-card-inner">
                                        
                                       
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        
                        <div className="row">
                               
                        </div>
                        
                    </div>
                </div>
            </div>


    






             {/* END MAIN CONTENT*/}
             {/* END PAGE CONTAINER*/}
        </div>

    </div>
	);
}

export  default MasterUser;