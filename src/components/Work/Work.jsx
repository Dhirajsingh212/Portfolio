import React from 'react'
import './Work.css'

const Work = () => {
  return (
        <div id='work' className='work_main'>
            <p>WORK</p>
            <div className='work'>

                <div className='work_project'>
                        <img src="data:image/png;base64,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" alt="" />
                        <div className='work_project_info'>
                            <p>
                                An expense manager to keep track of expenses.&nbsp;&nbsp;
                                <a href="https://joyful-lamington-1569b8.netlify.app/" className='work_project_info_link'><i class="fa-brands fa-github"></i></a>
                            </p>
                        </div>
                </div>

                <div className='work_project'>
                        <img src="https://clickup.com/blog/wp-content/uploads/2019/01/to-do-list-apps.png" alt="" />
                        <div className='work_project_info'>
                            <p>
                                A todo appliction to keep track of your work.&nbsp;&nbsp;
                                <a href="https://lambent-hummingbird-954e3f.netlify.app/" className='work_project_info_link'><i class="fa-brands fa-github"></i></a>
                            </p>
                        </div>
                </div>

                <div className='work_project'>
                        <img src="https://store-images.s-microsoft.com/image/apps.2005.14057826194083709.67242c47-4fd7-4f1a-9dd6-5d93f6cc10df.f80f14c0-72ab-46ff-86cd-9d801c8e04e8?mode=scale&q=90&h=300&w=300" alt="" />
                        <div className='work_project_info'>
                            <p>
                                A tic-tac-toe game using reactjs.&nbsp;&nbsp;
                                <a href="https://dhirajsingh212.github.io/tic_tac_toe/" className='work_project_info_link'><i class="fa-brands fa-github"></i></a>
                            </p>
                        </div>
                </div>

                <div className='work_project'>
                        <img src="https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png" alt="" />
                        <div className='work_project_info'>
                            <p>
                                A Blog website to post all the blog.&nbsp;&nbsp;
                                <a href="https://delightful-belekoy-6ce2f1.netlify.app/" className='work_project_info_link'><i class="fa-brands fa-github"></i></a>
                            </p>
                        </div>
                </div>

                <div className='work_project'>
                        <img src="https://neilpatel.com/wp-content/uploads/2017/08/blog.jpg" alt="" />
                        <div className='work_project_info'>
                            <p>
                                A Blog website to post all the blog.&nbsp;&nbsp;
                                <a href="https://jolly-kleicha-a58c9f.netlify.app/" className='work_project_info_link'><i class="fa-brands fa-github"></i></a>
                            </p>
                        </div>
                </div>

                <div className='work_project'>
                        <img src="https://p-news-uploads.storage.googleapis.com/2022/12/prisma-labs-lensa-ai.jpg" alt="" />
                        <div className='work_project_info'>
                            <p>
                                AI image generator used to generate a random image using any word.&nbsp;&nbsp;
                                <a href="https://super-moonbeam-4eb211.netlify.app/" className='work_project_info_link'><i class="fa-brands fa-github"></i></a>
                            </p>
                        </div>
                </div>

                <div className='work_project'>
                        <img src="https://pwpblog.wpengine.com/wp-content/uploads/2022/08/Ecommerce-Website-Promotion_Final.png" alt="" />
                        <div className='work_project_info'>
                            <p>
                                A Ecommerce website build using MERN stack.&nbsp;&nbsp;
                                <a href="https://luxury-croquembouche-5c9c20.netlify.app/" className='work_project_info_link'><i class="fa-brands fa-github"></i></a>
                            </p>
                        </div>
                </div>

            </div>
        </div>
  )
}

export default Work