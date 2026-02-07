const translations = {
    en: {
        name: "Fengxiaoxiao Li",
        role: "MSc Student at NUS",
        university_nus: "National University of Singapore (NUS)",
        university_uestc: "University of Electronic Science and Technology of China (UESTC)",
        email_label: "Email",

        nav_about: "About",
        nav_news: "News",
        nav_publications: "Publications",
        nav_projects: "Research & Projects",
        nav_experience: "Experience",
        nav_honors: "Honors",
        nav_cv: "Curriculum Vitae",
        nav_cv_cn: "CV (CN)",

        section_about: "About Me",
        about_intro: `I am currently an MSc student at the <a href="https://cde.nus.edu.sg/me/" target="_blank">National University of Singapore (NUS)</a>, College of Design and Engineering. I conduct research in the <a href="https://cde.nus.edu.sg/me/staff/sartoretti-guillaume-a/" target="_blank">Multi-Agent Robotic Motion (MARMot) Laboratory</a>, advised by Asst. Prof. Guillaume Sartoretti.`,
        about_prev: `Prior to joining NUS, I obtained my B.Eng in Aircraft Control and Information Engineering from the <a href="https://en.uestc.edu.cn/" target="_blank">University of Electronic Science and Technology of China (UESTC)</a>, where I ranked <strong>4/22</strong> and was waived from the National Postgraduate Entrance Examination due to academic excellence.`,
        about_interests_text: `My research interests lie at the intersection of <strong>Multi-Agent Systems</strong>, <strong>Reinforcement Learning</strong>, <strong>Robotic Control</strong>, <strong>Combinatorial Optimization</strong>, and <strong>Path Planning</strong>. Specifically, I focus on:`,

        interests_list: [
            "Data-driven and learning-based control",
            "Distributed multi-agent systems",
            "Event-triggered control",
            "Multi-objective Optimization for MAS decision-making"
        ],

        section_education: "Education",
        education_items: [
            {
                logo: "assets/logo_nus.jpg",
                period: "Aug 2025 - Jul 2026",
                scool_name: "National University of Singapore (NUS)",
                degree: "MSc in Mechanical Engineering",
                desc: "GPA: 4.63/5.00 (Sem 1)"
            },
            {
                logo: "assets/logo_uestc.webp",
                period: "Aug 2021 - Jun 2025",
                scool_name: "University of Electronic Science and Technology of China (UESTC)",
                degree: "B.Eng in Aircraft Control and Information Engineering",
                desc: "GPA: 3.78/4.00 (Rank 4/22). Exempted from National Entrance Exam."
            }
        ],

        section_news: "News",
        news_items: [
            {
                date: "Aug 2025",
                content: "Joined the <strong>MARMot Lab</strong> at NUS as a Research Student."
            },
            {
                date: "Jun 2025",
                content: "Awarded <strong>First Prize</strong> in the National Graduation Design Competition for UAV Engineering.",
                images: ["assets/uav_award.png"]
            },
            {
                date: "May 2025",
                content: "Awarded <strong>Second Prize</strong> in the National Undergraduate Thesis Competition (Aeronautics & Astronautics).",
                images: ["assets/thesis_award_group.png", "assets/thesis_award_cert.jpg"]
            },
            {
                date: "Oct 2024",
                content: "Ranked in the <strong>Top 15.6%</strong> globally at the IEEE Xtreme 18.0 Programming Competition.",
                images: ["assets/ieee_ranking.png", "assets/ieee_cert.png"]
            },
            {
                date: "Sep 2024",
                content: "Obtained <strong>Recommendation for Postgraduate Studies</strong> (Waived from National Entrance Exam) due to academic excellence."
            }
        ],

        section_publications: "Selected Publications",
        publications_intro: "* denotes equal contribution.",
        publications_list: [
            {
                year: "2026",
                title: "CAMO: A Scalable Neural Solver for the Multi-objective MTSP",
                authors: "<strong>Fengxiaoxiao Li*</strong>, Xiao Mao*, Yifeng Zhang, Yi Li, et al.",
                venue: "Submitted to the 15th International Conference on Swarm Intelligence (ANTS), 2026.",
                status: "Under Review",
                abstract: "Proposed a general neural solver CAMO for MOMTSP, achieving zero-shot generalization to arbitrary problem sizes via conditional attention mechanisms. Replaced the traditional hours-long inference time with seconds-level real-time reasoning while outperforming NSGA-III baselines.",
                links: []
            }
        ],

        section_research: "Research Experience",
        projects_items: [
            {
                title: "Learning-Driven Optimization for MOMTSP and MOHCVRP",
                role: "Research Assistant | NUS MARMot Lab | Aug 2025 - Present",
                advisor: "Advisor: Asst. Prof. Guillaume Sartoretti",
                points: [
                    "Developed a Transformer-based PARCO framework to generate diverse Pareto-optimal solution sets for multi-objective routing.",
                    "Implemented multi-agent RL with sparse rewards and transformer-based inter-agent communication.",
                    "Evaluated against NSGA-III/MOEA baselines, showing strong hypervolume performance and fast inference."
                ],
                images: []
            },
            {
                title: "CAMO: Scalable Neural Solver for MOMTSP via Deep RL",
                role: "Research Assistant | NUS MARMot Lab | Aug 2025 - Nov 2025",
                advisor: "Advisor: Asst. Prof. Guillaume Sartoretti",
                points: [
                    "Proposed CAMO, a general neural solver achieving Zero-shot Generalization across arbitrary problem scales.",
                    "Innovated a Conditional Encoder and pioneered a decoupled Agent/Node-selection Dual Decoder to break input dimension constraints.",
                    "Enhanced REINFORCE with dynamic sampling, reducing inference time from hours to seconds while outperforming NSGA-III."
                ],
                images: []
            },
            {
                title: "Prescribed-Time Formation Tracking with Neural Event-Triggered Control",
                role: "Research Assistant | UESTC | May 2024 - Jun 2025",
                advisor: "Advisor: Asst. Prof. Zhiqiang Li",
                points: [
                    "Designed a prescribed-time formation tracking protocol for second-order multi-agent systems.",
                    "Developed a neural adaptive event-triggered mechanism to reduce communication load.",
                    "Validated robustness in MATLAB/Simulink under noise and distrubances."
                ],
                images: ["assets/project_formation_1.png", "assets/project_formation_2.png"]
            },
            {
                title: "Modular Classified Controlled Sounding Rocket",
                role: "Team Member | UESTC",
                advisor: "",
                points: [
                    "Designed a versatile, cost-effective model rocket with independent avionics and control algorithms.",
                    "Implemented stability control using a 10-axis sensor for real-time attitude correction and parachute release.",
                    "Won the UESTC College Students' Innovative Entrepreneurial Training Plan Program Yunhui Scholarship (Top 7%)."
                ],
                images: ["assets/rocket_poster_full.png", "assets/rocket_1.png", "assets/rocket_2.jpg"]
            },
            {
                title: "Deep Learning-based Pneumonia Detection in Chest X-ray Images",
                role: "Research Student | Nanyang Technological University | Jul 2024 - Sep 2024",
                advisor: "Advisor: Dr. Teoh Teik Toe",
                points: [
                    "Selected 5,216 images from Kaggle datasets and performed undersampling to address class imbalance.",
                    "Built a 4-layer CNN in TensorFlow, achieving 95.63% accuracy after 150 training epochs.",
                    "Benchmarked performance against ResNet, Random Forest, and Logistic Regression models."
                ],
                images: []
            },
            {
                title: "All-Terrain Foldable Multi-Legged Exploration Robot",
                role: "Leader | UESTC | Mar 2023 - Jul 2023",
                advisor: "Advisor: Prof. Zhenwei Wang",
                points: [
                    "Designed a foldable hexapod robot and implemented a stable triangular gait for uneven terrain.",
                    "Built embedded locomotion control (Arduino + TB6600) for stepper motors.",
                    "Deployed CNN-based obstacle recognition on ESP32-CAM (96.8% accuracy)."
                ],
                images: ["assets/hexapod_poster_full.png", "assets/hexapod_1.jpg", "assets/hexapod_2.jpg"]
            }
        ],

        section_experience: "Leadership & Experience",
        experience_items: [
            {
                title: "Campus Sales Manager (Intern)",
                org: "China Mobile",
                period: "Jul 2024 - Oct 2024",
                desc: "Led a team of 20+ members to plan summer sales strategies. Ranked 2nd among all teams with 5-figure profit."
            },
            {
                title: "Minister of Rights and External Liaison Dept.",
                org: "UESTC School of Aeronautics and Astronautics Student Union",
                period: "May 2022 - May 2023",
                desc: "Organized campus events with 1500+ participants (90% satisfaction rate). Facilitated communication between students and university leadership."
            }
        ],

        section_honors: "Honors & Awards",
        honors_list: [
            "<strong>First Prize</strong>, National Graduation Design Competition for UAV Engineering (2025)",
            "<strong>Second Prize</strong>, National Undergraduate Thesis Competition (Aeronautics & Astronautics) (2025)",
            "<strong>Distinction Winner</strong>, NTU AI Lab Summer Research Program (Top 2%) (2024)",
            "<strong>Top 15.6% Globally</strong>, IEEE Xtreme 18.0 Programming Competition (2024)",
            "<strong>UESTC Outstanding Student Scholarship</strong> (2022-2024)"
        ],

        footer: "&copy; 2026 Fengxiaoxiao Li"
    },

    cn: {
        name: "李冯潇骁",
        role: "新加坡国立大学 硕士研究生",
        university_nus: "新加坡国立大学 (NUS)",
        university_uestc: "电子科技大学 (UESTC)",
        email_label: "邮箱",

        nav_about: "关于我",
        nav_news: "最新动态",
        nav_publications: "发表论文",
        nav_projects: "科研项目",
        nav_experience: "实习经历",
        nav_honors: "荣誉奖项",
        nav_cv: "英文简历",
        nav_cv_cn: "中文简历",

        section_about: "个人简介",
        about_intro: `我目前是<a href="https://cde.nus.edu.sg/me/" target="_blank">新加坡国立大学 (NUS)</a> 机械工程专业的硕士研究生。我是<a href="https://cde.nus.edu.sg/me/staff/sartoretti-guillaume-a/" target="_blank">多智能体机器人运动 (MARMot) 实验室</a>的成员，师从 Guillaume Sartoretti 助理教授。`,
        about_prev: `此前，我于2025年获得<a href="https://en.uestc.edu.cn/" target="_blank">电子科技大学 (UESTC)</a> 飞行器控制与信息工程学士学位，专业排名 <strong>4/22</strong>，并因成绩优异获得推免资格。`,
        about_interests_text: `我的研究兴趣主要集中在<strong>多智能体系统</strong>、<strong>强化学习</strong>、<strong>机器人控制</strong>、<strong>组合优化</strong>以及<strong>路径规划</strong>。具体专注于：`,

        interests_list: [
            "数据驱动与基于学习的控制",
            "分布式多智能体系统",
            "事件触发控制",
            "多智能体决策的多目标优化"
        ],

        section_education: "教育经历",
        education_items: [
            {
                logo: "assets/logo_nus.jpg",
                period: "2025.08 - 2026.07",
                scool_name: "新加坡国立大学 (NUS)",
                degree: "机械工程 硕士",
                desc: "GPA: 4.63/5.00 (第一学期). MARMot 实验室科研."
            },
            {
                logo: "assets/logo_uestc.webp",
                period: "2021.09 - 2025.06",
                scool_name: "电子科技大学 (UESTC)",
                degree: "飞行器控制与信息工程 学士",
                desc: "GPA: 3.78/4.00 (排名 4/22). 获保研资格."
            }
        ],

        section_news: "最新动态",
        news_items: [
            {
                date: "2025.08",
                content: "加入新加坡国立大学 <strong>MARMot 实验室</strong> 担任科研学生。"
            },
            {
                date: "2025.06",
                content: "获得第二届全国高等学校无人机类专业毕业设计大赛 <strong>一等奖</strong>。",
                images: ["assets/uav_award.png"]
            },
            {
                date: "2025.05",
                content: "获得第六届全国高等学校航空航天类专业本科毕业设计大赛 <strong>二等奖</strong>。",
                images: ["assets/thesis_award_group.png", "assets/thesis_award_cert.jpg"]
            },
            {
                date: "2024.10",
                content: "在第18届 IEEE Xtreme 极限编程大赛中排名 <strong>全球前 15.6%</strong>。",
                images: ["assets/ieee_ranking.png", "assets/ieee_cert.png"]
            },
            {
                date: "2024.09",
                content: "因学业优异获得<strong>免试攻读研究生资格</strong> (保研)。"
            }
        ],

        section_publications: "精选论文",
        publications_intro: "* 代表共同第一作者。",
        publications_list: [
            {
                year: "2026",
                title: "CAMO: A Scalable Neural Solver for the Multi-objective MTSP",
                authors: "<strong>Fengxiaoxiao Li*</strong>, Xiao Mao*, Yifeng Zhang, Yi Li, et al.",
                venue: "投稿至第15届国际群体智能会议 (ANTS), 2026.",
                status: "审稿中",
                abstract: "提出针对 MOMTSP 的通用神经求解器 CAMO，通过条件注意力机制实现对任意规模问题的零样本泛化。将推理时间从传统的小时级缩短至秒级，同时在超体积指指标上优于 NSGA-III 基线。",
                links: []
            }
        ],

        section_research: "科研项目经历",
        projects_items: [
            {
                title: "MOMTSP 和 MOHCVRP 的学习驱动优化",
                role: "研究助理 | NUS MARMot Lab | 2025.08 - 至今",
                advisor: "指导老师: Asst. Prof. Guillaume Sartoretti",
                points: [
                    "开发了基于 Transformer 的 PARCO 框架，为多目标路由生成多样化的帕累托最优解集。",
                    "实现了具有稀疏奖励和基于 Transformer 的智能体间通信的多智能体强化学习。",
                    "与 NSGA-III/MOEA 基线进行对比评估，展示了强大的超体积性能和快速推理能力。"
                ],
                images: []
            },
            {
                title: "CAMO: 基于深度强化学习的 MOMTSP 可扩展神经求解器",
                role: "研究助理 | NUS MARMot Lab | 2025.08 - 2025.11",
                advisor: "指导老师: Asst. Prof. Guillaume Sartoretti",
                points: [
                    "提出通用神经求解器 CAMO，实现对任意问题规模的零样本泛化。",
                    "创新条件编码器并首创解耦的 Agent/Node-selection 双解码器，打破输入维度限制。",
                    "通过动态采样增强 REINFORCE 算法，将推理时间从数小时缩短至数秒，并超越 NSGA-III。"
                ],
                images: []
            },
            {
                title: "基于神经事件触发控制的预设时间编队跟踪",
                role: "研究助理 | UESTC | 2024.05 - 2025.06",
                advisor: "指导老师: 李志强 副教授",
                points: [
                    "设计了针对二阶多智能体系统的预设时间编队跟踪协议。",
                    "开发了一种神经自适应事件触发机制以减少通信负载。",
                    "在 MATLAB/Simulink 中验证了噪声和干扰下的鲁棒性。"
                ],
                images: ["assets/project_formation_1.png", "assets/project_formation_2.png"]
            },
            {
                title: "模块化分级控制探空火箭",
                role: "团队成员 | UESTC",
                advisor: "",
                points: [
                    "设计了一款多功能、低成本的模型火箭，配备独立的航电和控制算法。",
                    "利用10轴传感器实现实时姿态校正和开伞控制的稳定性控制。",
                    "获得电子科技大学“云汇”创新创业奖学金 (Top 7%)。"
                ],
                images: ["assets/rocket_poster_full.png", "assets/rocket_1.png", "assets/rocket_2.jpg"]
            },
            {
                title: "基于深度学习的肺炎X光图像检测",
                role: "研究学生 | 南洋理工大学 (NTU) | 2025.07 - 2024.09",
                advisor: "指导老师: Dr. Teoh Teik Toe",
                points: [
                    "从 Kaggle 数据集中筛选 5,216 张图像，并进行欠采样以解决类别不平衡问题。",
                    "在 TensorFlow 中构建 4 层 CNN，经过 150 个 epoch 训练后达到 95.63% 的准确率。",
                    "与 ResNet、随机森林和逻辑回归模型进行了性能基准测试对比。"
                ],
                images: []
            },
            {
                title: "全地形可折叠多足探测机器人",
                role: "组长 | UESTC | 2023.03 - 2023.07",
                advisor: "指导老师: 王祯伟 教授",
                points: [
                    "设计了一款可折叠六足机器人，并实现了适应不平坦地形的稳定三角步态。",
                    "构建了基于 Arduino + TB6600 的步进电机嵌入式运动控制。",
                    "在 ESP32-CAM 上部署了基于 CNN 的障碍物识别算法 (准确率 96.8%)。"
                ],
                images: ["assets/hexapod_poster_full.png", "assets/hexapod_1.jpg", "assets/hexapod_2.jpg"]
            }
        ],

        section_experience: "实习与领导力经历",
        experience_items: [
            {
                title: "校园销售经理 (实习)",
                org: "中国移动",
                period: "2024.07 - 2024.10",
                desc: "带领团队成员20余人策划暑期销售方案，制定线上线下营销战略。团队排名第二，累计盈利达五位数。"
            },
            {
                title: "权益外联部 部长",
                org: "电子科技大学航空航天学院学生会",
                period: "2022.05 - 2023.05",
                desc: "策划组织校级活动，总参与人数达1500人，好评率90%。协调校领导与学生沟通合作。"
            }
        ],

        section_honors: "荣誉与奖项",
        honors_list: [
            "<strong>一等奖</strong>, 全国高等学校无人机类专业毕业设计大赛 (2025)",
            "<strong>二等奖</strong>, 全国高等学校航空航天类专业本科毕业设计大赛 (2025)",
            "<strong>Distinction Winner</strong>, NTU AI Lab 暑期科研项目 (Top 2%) (2024)",
            "<strong>全球前 15.6%</strong>, IEEE Xtreme 18.0 极限编程大赛 (2024)",
            "<strong>电子科技大学优秀学生奖学金</strong> (2022-2024)"
        ],

        footer: "&copy; 2026 李冯潇骁"
    }
};
