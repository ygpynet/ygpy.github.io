import ads from './ads'

export default {
    '/vpn/': [
        {
            text: '试用机场',
            items: [
                {
                    text: '2025',
                    collapsed: false,
                    items: [
                        { text: '7 月', link: '/vpn/2025/07' },
                        { text: '6 月', link: '/vpn/2025/06' },
                        { text: '5 月', link: '/vpn/2025/05' },
                        { text: '4 月', link: '/vpn/2025/04' },
                        { text: '3 月', link: '/vpn/2025/03' },
                        { text: '2 月', link: '/vpn/2025/02' },
                        { text: '1 月', link: '/vpn/2025/01' }
                    ]
                },
                {
                    text: '归档',
                    collapsed: true,
                    items: [
                        { text: '2024 年', link: '/vpn/2024/12' }
                    ]
                }
            ]
        },
        {
            text: '赞助商广告',
            collapsed: false,
            items: [
                {
                    text: `<img class="rounded-lg" src="${ads.sidebar.src}" alt="${ads.sidebar.alt}">`,
                    link: `${ads.sidebar.href}`
                }
            ]
        }
    ],
    '/vpn/free/': [
        {
            text: '免费机场',
            link: '/vpn/free/'
        }
    ],
    '/vpn/paid/': [
        {
            text: '付费机场',
            link: '/vpn/paid/'
        }
    ],
    '/app/': [
        {
            text: '代理软件',
            link: '/app/proxy'
        },
        {
            text: '测速工具',
            link: '/app/speed'
        }
    ]
}