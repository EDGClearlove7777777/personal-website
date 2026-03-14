const translations = {
    en: {
        name: "Fengxiaoxiao Li",
        role: "Master Student @ NUS",
        university_nus: "National University of Singapore (NUS)",
        university_uestc: "University of Electronic Science and Technology of China (UESTC)",
        email_label: "Email",
        nav_about: "About",
        nav_news: "News",
        nav_publications: "Publications",
        nav_projects: "Projects",
        nav_honors: "Honors",
        nav_cv: "Curriculum Vitae",

        section_about: "About Me",
        about_text: `I am currently a Master's student at the <a href="https://cde.nus.edu.sg/me/" target="_blank">National University of Singapore (NUS)</a>, majoring in Mechanical Engineering. I am a member of the <a href="#" target="_blank">Multi-Agent Robotic Motion (MARMot) Laboratory</a>, advised by <a href="#" target="_blank">Asst. Prof. Guillaume Sartoretti</a>. 
        <br><br>
        Previously, I received my B.Eng. degree in Aircraft Control and Information Engineering from <a href="https://en.uestc.edu.cn/" target="_blank">UESTC</a> in 2025, where I ranked <strong>4/22</strong> and was waived from the National Postgraduate Entrance Examination.
        <br><br>
        Currently, I am also delving into the field of <strong>Embodied AI</strong>. I firmly believe that this research direction has the potential to change the world.`,

        interests_title: "Research Interests",
        interests_list: [
            "Data-driven and learning-based control",
            "Multi-agent robotic systems",
            "Safe and distributed control",
            "Reinforcement learning for robotic decision-making"
        ],

        education_title: "Education",
        edu_nus_degree: "M.Sc. in Mechanical Engineering",
        edu_nus_period: "Aug 2025 - Jul 2026",
        edu_nus_desc: "GPA: 4.63/5.00 (Sem 1). Research in MARMot Lab.",

        edu_uestc_degree: "B.Eng. in Aircraft Control and Information Engineering",
        edu_uestc_period: "Aug 2021 - Jun 2025",
        edu_uestc_desc: "GPA: 3.78/4.00. Outstanding Student Scholarship.",

        section_news: "News",
        news_items: [
            { date: "2026", text: "Paper <strong>CAMO: A Conditional Neural Solver...</strong> submitted to IROS 2026." },
            {
                date: "Jun 2025",
                text: " awarded <strong>First Prize</strong> in National Graduation Design Competition for UAV Engineering (Top 2%).",
                images: ["assets/uav_award.png"]
            },
            { date: "Jun 2025", text: "Received <strong>Graduate Awards</strong> (Innovation/Endeavor/Contribution) from UESTC." },
            {
                date: "May 2025",
                text: "Awarded <strong>Second Prize</strong> in National Undergraduate Thesis Competition (Aeronautics & Astronautics).",
                images: ["assets/thesis_award_group.png", "assets/thesis_award_cert.jpg"]
            },
            {
                date: "Oct 2024",
                text: "Ranked <strong>Top 15.6% globally</strong> in IEEE Xtreme 18.0 Programming Competition.",
                images: ["assets/ieee_ranking.png", "assets/ieee_cert.png"]
            },
            { date: "Jul 2024", text: "Won <strong>Distinction Winner</strong> (Top 2%) in NTU AI Lab Summer Research Program." },
            { date: "Oct 2023", text: "Received <strong>Yunhui Specialized Scholarship</strong> (Top 5%) and UESTC Outstanding Student Scholarship." }
        ],

        section_projects: "Research Projects",
        projects_items: [
            {
                title: "Multi-Objective Optimization for Multi-Robot Systems based on DRL (CAMO)",
                period: "Aug 2025 - Mar 2026",
                desc: "Advisor: Asst. Prof. Guillaume Sartoretti. Addressed the MOMTSP generalization challenge by proposing a DRL-based framework, CAMO. Innovated a Conditional Encoder and decoupled collaborative decoder. Outperformed baselines and validated deployment on a ROS-based mobile robot platform.",
                tags: ["Deep RL", "Multi-Agent", "Optimization"],
                image: "assets/images/project_camo.png"
            },
            {
                title: "Formation Tracking with Neural Event-Triggered Control",
                period: "May 2024 - Jun 2025",
                desc: "Advisor: Asst. Prof. Zhiqiang Li. Designed a prescribed-time formation tracking protocol for second-order multi-agent systems using RBFNN and event-triggered mechanisms.",
                tags: ["Control Theory", "Matlab/Simulink", "Multi-Agent"],
                image: "assets/images/project_formation.jpg"
            },
            {
                title: "Pneumonia Detection from Chest X-ray",
                period: "Jul 2024 - Oct 2024",
                desc: "NTU Business AI-Lab. Built a CNN model using TensorFlow to classify pneumonia images, achieving higher recall through imbalance handling.",
                tags: ["Computer Vision", "TensorFlow", "Medical AI"],
                image: "assets/images/project_pneumonia.jpg"
            },
            {
                title: "All-Terrain Foldable Multi-Legged Exploration Robot",
                period: "Mar 2023 - Jul 2023",
                desc: "Advisor: Prof. Zhenwei Wang. Designed a hexapod robot with triangular gait for uneven terrain. Implemented object recognition on ESP32-CAM.",
                tags: ["Robotics", "Embedded Systems", "Hardware"],
                image: "assets/images/project_hexapod.jpg"
            }
        ],

        section_publications: "Publications",
        publications_intro: "* denotes equal contribution.",
        publications_list: [
            "<strong>Fengxiaoxiao Li*</strong>, Xiao Mao*, Mingfeng Fan, Yifeng Zhang, Yi Li, et al. \"CAMO: A Conditional Neural Solver for the Multi-objective MTSP.\" <em>Submitted to IEEE/RSJ International Conference on INTELLIGENT ROBOTS SYSTEMS (IROS)</em>, 2026."
        ],

        btn_lang_en: "English",
        btn_lang_cn: "中文"
    },
    cn: {
        name: "李冯潇骁",
        role: "硕士研究生 @ 新加坡国立大学",
        university_nus: "新加坡国立大学 (NUS)",
        university_uestc: "电子科技大学 (UESTC)",
        email_label: "邮箱",
        nav_about: "关于我",
        nav_news: "最新动态",
        nav_publications: "发表论文",
        nav_projects: "科研项目",
        nav_honors: "荣誉奖项",
        nav_cv: "简历",

        section_about: "个人简介",
        about_text: `我目前是<a href="https://cde.nus.edu.sg/me/" target="_blank">新加坡国立大学 (NUS)</a> 机械工程专业的硕士研究生。我是<a href="#" target="_blank">多智能体机器人运动 (MARMot) 实验室</a>的成员，师从 <a href="#" target="_blank">Guillaume Sartoretti 助理教授</a>。
        <br><br>
        此前，我于2025年获得<a href="https://en.uestc.edu.cn/" target="_blank">电子科技大学 (UESTC)</a> 飞行器控制与信息工程学士学位，专业排名 <strong>4/22</strong>，并获得推免资格。
        <br><br>
        目前，我正在积极学习<strong>具身智能 (Embodied AI)</strong> 领域的相关知识，我坚信这一研究方向足以改变世界。`,

        interests_title: "研究兴趣",
        interests_list: [
            "数据驱动与基于学习的控制",
            "多智能体机器人系统",
            "安全与分布式控制",
            "机器人决策的强化学习"
        ],

        education_title: "教育经历",
        edu_nus_degree: "机械工程 硕士",
        edu_nus_period: "2025.08 - 2026.07",
        edu_nus_desc: "GPA: 4.63/5.00 (第一学期). MARMot 实验室科研.",

        edu_uestc_degree: "飞行器控制与信息工程 学士",
        edu_uestc_period: "2021.09 - 2025.06",
        edu_uestc_desc: "GPA: 3.78/4.00. 获优秀学生奖学金.",

        section_news: "最新动态",
        news_items: [
            { date: "2026", text: "论文 <strong>CAMO: A Conditional Neural Solver...</strong> 投稿至 IROS 2026." },
            {
                date: "2025.06",
                text: "获得第二届全国高等学校无人机类专业毕业设计大赛 <strong>一等奖</strong> (Top 2%).",
                images: ["assets/uav_award.png"]
            },
            { date: "2025.06", text: "获得电子科技大学毕业荣誉：创新/奋斗/贡献奖 (1/23)." },
            {
                date: "2025.05",
                text: "获得第六届全国高等学校航空航天类专业本科毕业设计大赛 <strong>二等奖</strong> (Top 5%).",
                images: ["assets/thesis_award_group.png", "assets/thesis_award_cert.jpg"]
            },
            {
                date: "2024.10",
                text: "在第18届 IEEE Xtreme 极限编程大赛中排名 <strong>全球前 15.6%</strong>.",
                images: ["assets/ieee_ranking.png", "assets/ieee_cert.png"]
            },
            { date: "2024.07", text: "获得 NTU AI Lab 暑期科研项目 <strong>Distinction Winner</strong> (Top 2%)." },
            { date: "2023.10", text: "获得<strong>云汇专项奖学金</strong> (Top 5%) 及电子科技大学优秀学生奖学金." }
        ],

        section_projects: "科研项目",
        projects_items: [
            {
                title: "基于深度强化学习的多机器人系统多目标优化 (CAMO)",
                period: "2025.08 - 2026.03",
                desc: "指导老师: Guillaume Sartoretti。针对 MOMTSP 泛化难题，提出 DRL-based 的框架 CAMO。设计条件编码器高效融合多目标偏好与实例信息，并首创解耦的协同解码器。实验显著优于启发式和 DRL 基线算法，并在基于 ROS 的移动机器人平台上证明了真机部署的有效性。",
                tags: ["深度强化学习", "多智能体", "多目标优化"],
                image: "assets/images/project_camo.png"
            },
            {
                title: "基于神经事件触发控制的编队跟踪",
                period: "2024.05 - 2025.06",
                desc: "指导老师: 李志强. 设计了针对二阶多智能体系统的预设时间编队跟踪协议，结合RBFNN和事件触发机制。",
                tags: ["控制理论", "Matlab/Simulink", "多智能体"],
                image: "assets/images/project_formation.jpg"
            },
            {
                title: "基于深度学习的肺炎医学图像分类",
                period: "2024.07 - 2024.10",
                desc: "NTU Business AI-Lab. 搭建CNN模型处理肺炎X光图像，通过不完全采样解决类不平衡问题，提高召回率。",
                tags: ["计算机视觉", "TensorFlow", "医疗AI"],
                image: "assets/images/project_pneumonia.jpg"
            },
            {
                title: "全地形可折叠多足探测机器人",
                period: "2023.03 - 2023.07",
                desc: "指导老师: 王祯伟. 设计六足机器人及三角步态以适应非平坦地形。基于ESP32-CAM实现目标识别。",
                tags: ["机器人", "嵌入式", "硬件设计"],
                image: "assets/images/project_hexapod.jpg"
            }
        ],

        section_publications: "发表论文",
        publications_intro: "* 代表共同一作.",
        publications_list: [
            "<strong>Fengxiaoxiao Li*</strong>, Xiao Mao*, Mingfeng Fan, Yifeng Zhang, Yi Li, et al. \"CAMO: A Conditional Neural Solver for the Multi-objective MTSP.\" <em>Submitted to IEEE/RSJ International Conference on INTELLIGENT ROBOTS SYSTEMS (IROS)</em>, 2026."
        ],

        btn_lang_en: "English",
        btn_lang_cn: "中文"
    }
};
