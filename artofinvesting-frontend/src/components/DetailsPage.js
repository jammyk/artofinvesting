import React, { Component } from 'react'
import FixedSideNav from './FixedSideNav'
import { Row, Col } from 'antd'
import FinancialStatement from './FinancialStatement'
import Calculator from './Calculator'

export default class DetailsPage extends Component {
    render() {
        return (
            <div style={{width: "80%"}}>
                <Row>
                        <Col push={1} span={4}>
                            <FixedSideNav/>
                        </Col>
                    <Col span={18}>
                    <section id="first-paragraph" className="first-paragraph">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dui purus. Ut nec dolor consectetur, dapibus elit ut, faucibus arcu. Aenean mi sapien, sodales vitae imperdiet et, iaculis non lacus. Etiam commodo non purus sit amet posuere. Nam id odio eget mi fringilla finibus. Fusce vitae urna luctus, tincidunt nisi eu, euismod erat. Praesent convallis blandit dui, nec dictum erat consectetur quis. Sed cursus varius augue a egestas.
                            Integer et blandit ante. Cras nec congue dui, ac venenatis turpis. Nullam non magna nulla. Curabitur scelerisque leo eget varius facilisis. Mauris aliquam molestie dolor, eget facilisis neque ullamcorper ut. Fusce et nunc sapien. Nullam eget elementum tortor. Nunc lacinia nulla nec mauris sodales tempus.
                            Curabitur eu nunc sit amet felis convallis congue eu vitae elit. Praesent efficitur pellentesque erat eget porttitor. Suspendisse sed convallis arcu, quis tristique odio. Suspendisse luctus, nisl sed imperdiet gravida, tellus sapien placerat arcu, vitae venenatis quam nulla id urna. Praesent at laoreet erat. In eu quam sit amet felis tempor gravida in eu nunc. Etiam tristique pulvinar volutpat. Nulla iaculis viverra nunc nec finibus. Aliquam pulvinar arcu id volutpat pretium. Vivamus porttitor urna commodo, hendrerit lorem at, blandit nulla. Nullam tincidunt, tortor eu tincidunt efficitur, nunc ligula convallis metus, rhoncus varius est lacus et ex.
                            Duis vulputate velit nec ex ultricies, ac interdum turpis mattis. Nullam elementum sapien iaculis feugiat luctus. Cras tincidunt tellus quis velit porttitor elementum. Vivamus dapibus rutrum lectus, et facilisis urna ultricies ac. Nunc lacinia commodo feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquam nibh non ipsum lacinia fringilla. Sed malesuada urna nunc, id fringilla mauris dictum id. Proin accumsan justo nec rhoncus egestas. Nam et est imperdiet, sagittis mi non, gravida odio. Quisque consectetur ligula sed turpis mollis, vitae facilisis justo placerat.
                            Sed porttitor imperdiet iaculis. Sed rhoncus quis libero in hendrerit. Cras condimentum diam sed nisl aliquet, vitae convallis leo cursus. Curabitur molestie consequat felis ac fringilla. Vestibulum facilisis nulla sit amet augue porta, id fermentum nisi feugiat. Sed vulputate, mi sed maximus lacinia, lacus sem rhoncus ipsum, a mollis ipsum tellus sed sem. Phasellus eu ultrices urna. Donec laoreet velit sed nibh dignissim tincidunt.
                        </p>
                    </section>
                    <FinancialStatement/>
                    <p id="financial-statements">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dui purus. Ut nec dolor consectetur, dapibus elit ut, faucibus arcu. Aenean mi sapien, sodales vitae imperdiet et, iaculis non lacus. Etiam commodo non purus sit amet posuere. Nam id odio eget mi fringilla finibus. Fusce vitae urna luctus, tincidunt nisi eu, euismod erat. Praesent convallis blandit dui, nec dictum erat consectetur quis. Sed cursus varius augue a egestas.
                        Integer et blandit ante. Cras nec congue dui, ac venenatis turpis. Nullam non magna nulla. Curabitur scelerisque leo eget varius facilisis. Mauris aliquam molestie dolor, eget facilisis neque ullamcorper ut. Fusce et nunc sapien. Nullam eget elementum tortor. Nunc lacinia nulla nec mauris sodales tempus.
                        Curabitur eu nunc sit amet felis convallis congue eu vitae elit. Praesent efficitur pellentesque erat eget porttitor. Suspendisse sed convallis arcu, quis tristique odio. Suspendisse luctus, nisl sed imperdiet gravida, tellus sapien placerat arcu, vitae venenatis quam nulla id urna. Praesent at laoreet erat. In eu quam sit amet felis tempor gravida in eu nunc. Etiam tristique pulvinar volutpat. Nulla iaculis viverra nunc nec finibus. Aliquam pulvinar arcu id volutpat pretium. Vivamus porttitor urna commodo, hendrerit lorem at, blandit nulla. Nullam tincidunt, tortor eu tincidunt efficitur, nunc ligula convallis metus, rhoncus varius est lacus et ex.
                        Duis vulputate velit nec ex ultricies, ac interdum turpis mattis. Nullam elementum sapien iaculis feugiat luctus. Cras tincidunt tellus quis velit porttitor elementum. Vivamus dapibus rutrum lectus, et facilisis urna ultricies ac. Nunc lacinia commodo feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquam nibh non ipsum lacinia fringilla. Sed malesuada urna nunc, id fringilla mauris dictum id. Proin accumsan justo nec rhoncus egestas. Nam et est imperdiet, sagittis mi non, gravida odio. Quisque consectetur ligula sed turpis mollis, vitae facilisis justo placerat.
                        Sed porttitor imperdiet iaculis. Sed rhoncus quis libero in hendrerit. Cras condimentum diam sed nisl aliquet, vitae convallis leo cursus. Curabitur molestie consequat felis ac fringilla. Vestibulum facilisis nulla sit amet augue porta, id fermentum nisi feugiat. Sed vulputate, mi sed maximus lacinia, lacus sem rhoncus ipsum, a mollis ipsum tellus sed sem. Phasellus eu ultrices urna. Donec laoreet velit sed nibh dignissim tincidunt.
                    </p>
                    <p id="metrics">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dui purus. Ut nec dolor consectetur, dapibus elit ut, faucibus arcu. Aenean mi sapien, sodales vitae imperdiet et, iaculis non lacus. Etiam commodo non purus sit amet posuere. Nam id odio eget mi fringilla finibus. Fusce vitae urna luctus, tincidunt nisi eu, euismod erat. Praesent convallis blandit dui, nec dictum erat consectetur quis. Sed cursus varius augue a egestas.
                        Integer et blandit ante. Cras nec congue dui, ac venenatis turpis. Nullam non magna nulla. Curabitur scelerisque leo eget varius facilisis. Mauris aliquam molestie dolor, eget facilisis neque ullamcorper ut. Fusce et nunc sapien. Nullam eget elementum tortor. Nunc lacinia nulla nec mauris sodales tempus.
                        Curabitur eu nunc sit amet felis convallis congue eu vitae elit. Praesent efficitur pellentesque erat eget porttitor. Suspendisse sed convallis arcu, quis tristique odio. Suspendisse luctus, nisl sed imperdiet gravida, tellus sapien placerat arcu, vitae venenatis quam nulla id urna. Praesent at laoreet erat. In eu quam sit amet felis tempor gravida in eu nunc. Etiam tristique pulvinar volutpat. Nulla iaculis viverra nunc nec finibus. Aliquam pulvinar arcu id volutpat pretium. Vivamus porttitor urna commodo, hendrerit lorem at, blandit nulla. Nullam tincidunt, tortor eu tincidunt efficitur, nunc ligula convallis metus, rhoncus varius est lacus et ex.
                        Duis vulputate velit nec ex ultricies, ac interdum turpis mattis. Nullam elementum sapien iaculis feugiat luctus. Cras tincidunt tellus quis velit porttitor elementum. Vivamus dapibus rutrum lectus, et facilisis urna ultricies ac. Nunc lacinia commodo feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquam nibh non ipsum lacinia fringilla. Sed malesuada urna nunc, id fringilla mauris dictum id. Proin accumsan justo nec rhoncus egestas. Nam et est imperdiet, sagittis mi non, gravida odio. Quisque consectetur ligula sed turpis mollis, vitae facilisis justo placerat.
                        Sed porttitor imperdiet iaculis. Sed rhoncus quis libero in hendrerit. Cras condimentum diam sed nisl aliquet, vitae convallis leo cursus. Curabitur molestie consequat felis ac fringilla. Vestibulum facilisis nulla sit amet augue porta, id fermentum nisi feugiat. Sed vulputate, mi sed maximus lacinia, lacus sem rhoncus ipsum, a mollis ipsum tellus sed sem. Phasellus eu ultrices urna. Donec laoreet velit sed nibh dignissim tincidunt.
                    </p>
                    <p id="growth">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dui purus. Ut nec dolor consectetur, dapibus elit ut, faucibus arcu. Aenean mi sapien, sodales vitae imperdiet et, iaculis non lacus. Etiam commodo non purus sit amet posuere. Nam id odio eget mi fringilla finibus. Fusce vitae urna luctus, tincidunt nisi eu, euismod erat. Praesent convallis blandit dui, nec dictum erat consectetur quis. Sed cursus varius augue a egestas.
                        Integer et blandit ante. Cras nec congue dui, ac venenatis turpis. Nullam non magna nulla. Curabitur scelerisque leo eget varius facilisis. Mauris aliquam molestie dolor, eget facilisis neque ullamcorper ut. Fusce et nunc sapien. Nullam eget elementum tortor. Nunc lacinia nulla nec mauris sodales tempus.
                        Curabitur eu nunc sit amet felis convallis congue eu vitae elit. Praesent efficitur pellentesque erat eget porttitor. Suspendisse sed convallis arcu, quis tristique odio. Suspendisse luctus, nisl sed imperdiet gravida, tellus sapien placerat arcu, vitae venenatis quam nulla id urna. Praesent at laoreet erat. In eu quam sit amet felis tempor gravida in eu nunc. Etiam tristique pulvinar volutpat. Nulla iaculis viverra nunc nec finibus. Aliquam pulvinar arcu id volutpat pretium. Vivamus porttitor urna commodo, hendrerit lorem at, blandit nulla. Nullam tincidunt, tortor eu tincidunt efficitur, nunc ligula convallis metus, rhoncus varius est lacus et ex.
                        Duis vulputate velit nec ex ultricies, ac interdum turpis mattis. Nullam elementum sapien iaculis feugiat luctus. Cras tincidunt tellus quis velit porttitor elementum. Vivamus dapibus rutrum lectus, et facilisis urna ultricies ac. Nunc lacinia commodo feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquam nibh non ipsum lacinia fringilla. Sed malesuada urna nunc, id fringilla mauris dictum id. Proin accumsan justo nec rhoncus egestas. Nam et est imperdiet, sagittis mi non, gravida odio. Quisque consectetur ligula sed turpis mollis, vitae facilisis justo placerat.
                        Sed porttitor imperdiet iaculis. Sed rhoncus quis libero in hendrerit. Cras condimentum diam sed nisl aliquet, vitae convallis leo cursus. Curabitur molestie consequat felis ac fringilla. Vestibulum facilisis nulla sit amet augue porta, id fermentum nisi feugiat. Sed vulputate, mi sed maximus lacinia, lacus sem rhoncus ipsum, a mollis ipsum tellus sed sem. Phasellus eu ultrices urna. Donec laoreet velit sed nibh dignissim tincidunt.
                    </p>
                    <p id="margin">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dui purus. Ut nec dolor consectetur, dapibus elit ut, faucibus arcu. Aenean mi sapien, sodales vitae imperdiet et, iaculis non lacus. Etiam commodo non purus sit amet posuere. Nam id odio eget mi fringilla finibus. Fusce vitae urna luctus, tincidunt nisi eu, euismod erat. Praesent convallis blandit dui, nec dictum erat consectetur quis. Sed cursus varius augue a egestas.
                        Integer et blandit ante. Cras nec congue dui, ac venenatis turpis. Nullam non magna nulla. Curabitur scelerisque leo eget varius facilisis. Mauris aliquam molestie dolor, eget facilisis neque ullamcorper ut. Fusce et nunc sapien. Nullam eget elementum tortor. Nunc lacinia nulla nec mauris sodales tempus.
                        Curabitur eu nunc sit amet felis convallis congue eu vitae elit. Praesent efficitur pellentesque erat eget porttitor. Suspendisse sed convallis arcu, quis tristique odio. Suspendisse luctus, nisl sed imperdiet gravida, tellus sapien placerat arcu, vitae venenatis quam nulla id urna. Praesent at laoreet erat. In eu quam sit amet felis tempor gravida in eu nunc. Etiam tristique pulvinar volutpat. Nulla iaculis viverra nunc nec finibus. Aliquam pulvinar arcu id volutpat pretium. Vivamus porttitor urna commodo, hendrerit lorem at, blandit nulla. Nullam tincidunt, tortor eu tincidunt efficitur, nunc ligula convallis metus, rhoncus varius est lacus et ex.
                        Duis vulputate velit nec ex ultricies, ac interdum turpis mattis. Nullam elementum sapien iaculis feugiat luctus. Cras tincidunt tellus quis velit porttitor elementum. Vivamus dapibus rutrum lectus, et facilisis urna ultricies ac. Nunc lacinia commodo feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquam nibh non ipsum lacinia fringilla. Sed malesuada urna nunc, id fringilla mauris dictum id. Proin accumsan justo nec rhoncus egestas. Nam et est imperdiet, sagittis mi non, gravida odio. Quisque consectetur ligula sed turpis mollis, vitae facilisis justo placerat.
                        Sed porttitor imperdiet iaculis. Sed rhoncus quis libero in hendrerit. Cras condimentum diam sed nisl aliquet, vitae convallis leo cursus. Curabitur molestie consequat felis ac fringilla. Vestibulum facilisis nulla sit amet augue porta, id fermentum nisi feugiat. Sed vulputate, mi sed maximus lacinia, lacus sem rhoncus ipsum, a mollis ipsum tellus sed sem. Phasellus eu ultrices urna. Donec laoreet velit sed nibh dignissim tincidunt.
                    </p>
                    <p id="profitability">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dui purus. Ut nec dolor consectetur, dapibus elit ut, faucibus arcu. Aenean mi sapien, sodales vitae imperdiet et, iaculis non lacus. Etiam commodo non purus sit amet posuere. Nam id odio eget mi fringilla finibus. Fusce vitae urna luctus, tincidunt nisi eu, euismod erat. Praesent convallis blandit dui, nec dictum erat consectetur quis. Sed cursus varius augue a egestas.
                        Integer et blandit ante. Cras nec congue dui, ac venenatis turpis. Nullam non magna nulla. Curabitur scelerisque leo eget varius facilisis. Mauris aliquam molestie dolor, eget facilisis neque ullamcorper ut. Fusce et nunc sapien. Nullam eget elementum tortor. Nunc lacinia nulla nec mauris sodales tempus.
                        Curabitur eu nunc sit amet felis convallis congue eu vitae elit. Praesent efficitur pellentesque erat eget porttitor. Suspendisse sed convallis arcu, quis tristique odio. Suspendisse luctus, nisl sed imperdiet gravida, tellus sapien placerat arcu, vitae venenatis quam nulla id urna. Praesent at laoreet erat. In eu quam sit amet felis tempor gravida in eu nunc. Etiam tristique pulvinar volutpat. Nulla iaculis viverra nunc nec finibus. Aliquam pulvinar arcu id volutpat pretium. Vivamus porttitor urna commodo, hendrerit lorem at, blandit nulla. Nullam tincidunt, tortor eu tincidunt efficitur, nunc ligula convallis metus, rhoncus varius est lacus et ex.
                        Duis vulputate velit nec ex ultricies, ac interdum turpis mattis. Nullam elementum sapien iaculis feugiat luctus. Cras tincidunt tellus quis velit porttitor elementum. Vivamus dapibus rutrum lectus, et facilisis urna ultricies ac. Nunc lacinia commodo feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquam nibh non ipsum lacinia fringilla. Sed malesuada urna nunc, id fringilla mauris dictum id. Proin accumsan justo nec rhoncus egestas. Nam et est imperdiet, sagittis mi non, gravida odio. Quisque consectetur ligula sed turpis mollis, vitae facilisis justo placerat.
                        Sed porttitor imperdiet iaculis. Sed rhoncus quis libero in hendrerit. Cras condimentum diam sed nisl aliquet, vitae convallis leo cursus. Curabitur molestie consequat felis ac fringilla. Vestibulum facilisis nulla sit amet augue porta, id fermentum nisi feugiat. Sed vulputate, mi sed maximus lacinia, lacus sem rhoncus ipsum, a mollis ipsum tellus sed sem. Phasellus eu ultrices urna. Donec laoreet velit sed nibh dignissim tincidunt.
                    </p>                
                    <p id="key-holders">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dui purus. Ut nec dolor consectetur, dapibus elit ut, faucibus arcu. Aenean mi sapien, sodales vitae imperdiet et, iaculis non lacus. Etiam commodo non purus sit amet posuere. Nam id odio eget mi fringilla finibus. Fusce vitae urna luctus, tincidunt nisi eu, euismod erat. Praesent convallis blandit dui, nec dictum erat consectetur quis. Sed cursus varius augue a egestas.
                        Integer et blandit ante. Cras nec congue dui, ac venenatis turpis. Nullam non magna nulla. Curabitur scelerisque leo eget varius facilisis. Mauris aliquam molestie dolor, eget facilisis neque ullamcorper ut. Fusce et nunc sapien. Nullam eget elementum tortor. Nunc lacinia nulla nec mauris sodales tempus.
                        Curabitur eu nunc sit amet felis convallis congue eu vitae elit. Praesent efficitur pellentesque erat eget porttitor. Suspendisse sed convallis arcu, quis tristique odio. Suspendisse luctus, nisl sed imperdiet gravida, tellus sapien placerat arcu, vitae venenatis quam nulla id urna. Praesent at laoreet erat. In eu quam sit amet felis tempor gravida in eu nunc. Etiam tristique pulvinar volutpat. Nulla iaculis viverra nunc nec finibus. Aliquam pulvinar arcu id volutpat pretium. Vivamus porttitor urna commodo, hendrerit lorem at, blandit nulla. Nullam tincidunt, tortor eu tincidunt efficitur, nunc ligula convallis metus, rhoncus varius est lacus et ex.
                        Duis vulputate velit nec ex ultricies, ac interdum turpis mattis. Nullam elementum sapien iaculis feugiat luctus. Cras tincidunt tellus quis velit porttitor elementum. Vivamus dapibus rutrum lectus, et facilisis urna ultricies ac. Nunc lacinia commodo feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquam nibh non ipsum lacinia fringilla. Sed malesuada urna nunc, id fringilla mauris dictum id. Proin accumsan justo nec rhoncus egestas. Nam et est imperdiet, sagittis mi non, gravida odio. Quisque consectetur ligula sed turpis mollis, vitae facilisis justo placerat.
                        Sed porttitor imperdiet iaculis. Sed rhoncus quis libero in hendrerit. Cras condimentum diam sed nisl aliquet, vitae convallis leo cursus. Curabitur molestie consequat felis ac fringilla. Vestibulum facilisis nulla sit amet augue porta, id fermentum nisi feugiat. Sed vulputate, mi sed maximus lacinia, lacus sem rhoncus ipsum, a mollis ipsum tellus sed sem. Phasellus eu ultrices urna. Donec laoreet velit sed nibh dignissim tincidunt.
                    </p>                
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dui purus. Ut nec dolor consectetur, dapibus elit ut, faucibus arcu. Aenean mi sapien, sodales vitae imperdiet et, iaculis non lacus. Etiam commodo non purus sit amet posuere. Nam id odio eget mi fringilla finibus. Fusce vitae urna luctus, tincidunt nisi eu, euismod erat. Praesent convallis blandit dui, nec dictum erat consectetur quis. Sed cursus varius augue a egestas.
                        Integer et blandit ante. Cras nec congue dui, ac venenatis turpis. Nullam non magna nulla. Curabitur scelerisque leo eget varius facilisis. Mauris aliquam molestie dolor, eget facilisis neque ullamcorper ut. Fusce et nunc sapien. Nullam eget elementum tortor. Nunc lacinia nulla nec mauris sodales tempus.
                        Curabitur eu nunc sit amet felis convallis congue eu vitae elit. Praesent efficitur pellentesque erat eget porttitor. Suspendisse sed convallis arcu, quis tristique odio. Suspendisse luctus, nisl sed imperdiet gravida, tellus sapien placerat arcu, vitae venenatis quam nulla id urna. Praesent at laoreet erat. In eu quam sit amet felis tempor gravida in eu nunc. Etiam tristique pulvinar volutpat. Nulla iaculis viverra nunc nec finibus. Aliquam pulvinar arcu id volutpat pretium. Vivamus porttitor urna commodo, hendrerit lorem at, blandit nulla. Nullam tincidunt, tortor eu tincidunt efficitur, nunc ligula convallis metus, rhoncus varius est lacus et ex.
                        Duis vulputate velit nec ex ultricies, ac interdum turpis mattis. Nullam elementum sapien iaculis feugiat luctus. Cras tincidunt tellus quis velit porttitor elementum. Vivamus dapibus rutrum lectus, et facilisis urna ultricies ac. Nunc lacinia commodo feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquam nibh non ipsum lacinia fringilla. Sed malesuada urna nunc, id fringilla mauris dictum id. Proin accumsan justo nec rhoncus egestas. Nam et est imperdiet, sagittis mi non, gravida odio. Quisque consectetur ligula sed turpis mollis, vitae facilisis justo placerat.
                        Sed porttitor imperdiet iaculis. Sed rhoncus quis libero in hendrerit. Cras condimentum diam sed nisl aliquet, vitae convallis leo cursus. Curabitur molestie consequat felis ac fringilla. Vestibulum facilisis nulla sit amet augue porta, id fermentum nisi feugiat. Sed vulputate, mi sed maximus lacinia, lacus sem rhoncus ipsum, a mollis ipsum tellus sed sem. Phasellus eu ultrices urna. Donec laoreet velit sed nibh dignissim tincidunt.
                    </p>                
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dui purus. Ut nec dolor consectetur, dapibus elit ut, faucibus arcu. Aenean mi sapien, sodales vitae imperdiet et, iaculis non lacus. Etiam commodo non purus sit amet posuere. Nam id odio eget mi fringilla finibus. Fusce vitae urna luctus, tincidunt nisi eu, euismod erat. Praesent convallis blandit dui, nec dictum erat consectetur quis. Sed cursus varius augue a egestas.
                        Integer et blandit ante. Cras nec congue dui, ac venenatis turpis. Nullam non magna nulla. Curabitur scelerisque leo eget varius facilisis. Mauris aliquam molestie dolor, eget facilisis neque ullamcorper ut. Fusce et nunc sapien. Nullam eget elementum tortor. Nunc lacinia nulla nec mauris sodales tempus.
                        Curabitur eu nunc sit amet felis convallis congue eu vitae elit. Praesent efficitur pellentesque erat eget porttitor. Suspendisse sed convallis arcu, quis tristique odio. Suspendisse luctus, nisl sed imperdiet gravida, tellus sapien placerat arcu, vitae venenatis quam nulla id urna. Praesent at laoreet erat. In eu quam sit amet felis tempor gravida in eu nunc. Etiam tristique pulvinar volutpat. Nulla iaculis viverra nunc nec finibus. Aliquam pulvinar arcu id volutpat pretium. Vivamus porttitor urna commodo, hendrerit lorem at, blandit nulla. Nullam tincidunt, tortor eu tincidunt efficitur, nunc ligula convallis metus, rhoncus varius est lacus et ex.
                        Duis vulputate velit nec ex ultricies, ac interdum turpis mattis. Nullam elementum sapien iaculis feugiat luctus. Cras tincidunt tellus quis velit porttitor elementum. Vivamus dapibus rutrum lectus, et facilisis urna ultricies ac. Nunc lacinia commodo feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquam nibh non ipsum lacinia fringilla. Sed malesuada urna nunc, id fringilla mauris dictum id. Proin accumsan justo nec rhoncus egestas. Nam et est imperdiet, sagittis mi non, gravida odio. Quisque consectetur ligula sed turpis mollis, vitae facilisis justo placerat.
                        Sed porttitor imperdiet iaculis. Sed rhoncus quis libero in hendrerit. Cras condimentum diam sed nisl aliquet, vitae convallis leo cursus. Curabitur molestie consequat felis ac fringilla. Vestibulum facilisis nulla sit amet augue porta, id fermentum nisi feugiat. Sed vulputate, mi sed maximus lacinia, lacus sem rhoncus ipsum, a mollis ipsum tellus sed sem. Phasellus eu ultrices urna. Donec laoreet velit sed nibh dignissim tincidunt.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec dui purus. Ut nec dolor consectetur, dapibus elit ut, faucibus arcu. Aenean mi sapien, sodales vitae imperdiet et, iaculis non lacus. Etiam commodo non purus sit amet posuere. Nam id odio eget mi fringilla finibus. Fusce vitae urna luctus, tincidunt nisi eu, euismod erat. Praesent convallis blandit dui, nec dictum erat consectetur quis. Sed cursus varius augue a egestas.
                        Integer et blandit ante. Cras nec congue dui, ac venenatis turpis. Nullam non magna nulla. Curabitur scelerisque leo eget varius facilisis. Mauris aliquam molestie dolor, eget facilisis neque ullamcorper ut. Fusce et nunc sapien. Nullam eget elementum tortor. Nunc lacinia nulla nec mauris sodales tempus.
                        Curabitur eu nunc sit amet felis convallis congue eu vitae elit. Praesent efficitur pellentesque erat eget porttitor. Suspendisse sed convallis arcu, quis tristique odio. Suspendisse luctus, nisl sed imperdiet gravida, tellus sapien placerat arcu, vitae venenatis quam nulla id urna. Praesent at laoreet erat. In eu quam sit amet felis tempor gravida in eu nunc. Etiam tristique pulvinar volutpat. Nulla iaculis viverra nunc nec finibus. Aliquam pulvinar arcu id volutpat pretium. Vivamus porttitor urna commodo, hendrerit lorem at, blandit nulla. Nullam tincidunt, tortor eu tincidunt efficitur, nunc ligula convallis metus, rhoncus varius est lacus et ex.
                        Duis vulputate velit nec ex ultricies, ac interdum turpis mattis. Nullam elementum sapien iaculis feugiat luctus. Cras tincidunt tellus quis velit porttitor elementum. Vivamus dapibus rutrum lectus, et facilisis urna ultricies ac. Nunc lacinia commodo feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam aliquam nibh non ipsum lacinia fringilla. Sed malesuada urna nunc, id fringilla mauris dictum id. Proin accumsan justo nec rhoncus egestas. Nam et est imperdiet, sagittis mi non, gravida odio. Quisque consectetur ligula sed turpis mollis, vitae facilisis justo placerat.
                        Sed porttitor imperdiet iaculis. Sed rhoncus quis libero in hendrerit. Cras condimentum diam sed nisl aliquet, vitae convallis leo cursus. Curabitur molestie consequat felis ac fringilla. Vestibulum facilisis nulla sit amet augue porta, id fermentum nisi feugiat. Sed vulputate, mi sed maximus lacinia, lacus sem rhoncus ipsum, a mollis ipsum tellus sed sem. Phasellus eu ultrices urna. Donec laoreet velit sed nibh dignissim tincidunt.
                    </p>
                    </Col>
                    </Row>
                    <Calculator/>
            </div>
        )
    }
}
