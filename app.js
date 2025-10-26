// Risk data
const riskData = {
    onboarding: [
        { number: 1, title: "THIẾT LẬP TÀI LIỆU HỒ SƠ", description: "Duy trì hồ sơ đầy đủ và có tổ chức để đáp ứng tất cả các yêu cầu tuân thủ quy định", risk_level: "medium" },
        { number: 2, title: "NĂNG LỰC CHUYÊN MÔN", description: "Đảm bảo năng lực chuyên môn phù hợp với loại tài sản và kiến thức thị trường địa phương", risk_level: "high" },
        { number: 3, title: "HỢP ĐỒNG BẢO MẬT / THỎA THUẬN KHÔNG TIẾT LỘ", description: "Bảo mật nghiêm ngặt mọi thông tin nhạy cảm, bất kể đã ký kết thỏa thuận bảo mật (NDA) hay chưa", risk_level: "medium" },
        { number: 4, title: "THẨM ĐỊNH KHÁCH HÀNG / RÀ SOÁT CẤM VẬN", description: "Thực hiện thẩm định khách hàng (KYC - Know Your Customer) và kiểm tra danh sách cấm vận quốc tế (Sanctions Screening) để đảm bảo tuân thủ và bảo vệ danh tiếng JLL", risk_level: "high" },
        { number: 5, title: "XUNG ĐỘT LỢI ÍCH", description: "Kiểm tra toàn diện các xung đột tiềm ẩn liên quan đến chuyên gia định giá, công ty và tài sản", risk_level: "high" },
        { number: 6, title: "ĐÁNH GIÁ RỦI RO CAO", description: "Xem xét các yếu tố rủi ro liên quan đến tài sản, lĩnh vực hoặc thị trường có thể ảnh hưởng đến chất lượng tư vấn", risk_level: "high" },
        { number: 7, title: "TRÁCH NHIỆM PHÁP LÝ MỞ RỘNG", description: "Xác định rõ các bên được phép sử dụng báo cáo để kiểm soát trách nhiệm pháp lý, vì phạm vi phân phối rộng đồng nghĩa với rủi ro cao hơn", risk_level: "high" },
        { number: 8, title: "ĐẤU THẦU / CHÀO GIÁ DỊCH VỤ", description: "Xác định mức phí hợp lý dựa trên thời gian, độ phức tạp, mức độ rủi ro và điều kiện thị trường", risk_level: "medium" },
        { number: 9, title: "PHẠM VI SỬ DỤNG & CÔNG BỐ", description: "Làm rõ trách nhiệm pháp lý đối với thiệt hại có thể phát sinh do báo cáo định giá không chính xác", risk_level: "high" },
        { number: 10, title: "ĐIỀU KHOẢN VÀ ĐIỀU KIỆN CHUNG", description: "Làm rõ toàn bộ điều khoản để bảo vệ quyền lợi JLL, tốt nhất nên đính kèm vào Thư cam kết dịch vụ (Terms of Engagement)", risk_level: "medium" },
        { number: 11, title: "KÝ KẾT HỢP ĐỒNG CAM KẾT", description: "Giảm thiểu mọi sự mơ hồ trong hợp đồng để bảo vệ lợi ích của cả JLL và khách hàng", risk_level: "medium" },
        { number: 12, title: "XÁC NHẬN CHẤP THUẬN CỦA KHÁCH HÀNG", description: "Thu thập xác nhận chấp thuận điều khoản từ khách hàng trước khi phát hành báo cáo, tốt nhất là trước khi khởi công", risk_level: "high" },
        { number: 13, title: "ĐĂNG KÝ TRÊN HỆ THỐNG CRM", description: "Đảm bảo dự án được đăng ký đầy đủ và chính xác trên hệ thống quản lý quan hệ khách hàng", risk_level: "low" }
    ],
    valuation: [
        { number: 1, title: "KHẢO SÁT, CHỤP ẢNH, ĐO ĐẠC", description: "Thực hiện khảo sát thực địa, chụp ảnh và đo đạc đầy đủ để đảm bảo báo cáo định giá đạt chuẩn chuyên môn phù hợp với mục đích sử dụng", risk_level: "high" },
        { number: 2, title: "THÔNG TIN VÀ TÀI LIỆU THU THẬP", description: "Lập danh mục chi tiết các thông tin và tài liệu đã thu thập làm căn cứ cho báo cáo định giá", risk_level: "medium" },
        { number: 3, title: "DỮ LIỆU GIAO DỊCH THAM CHIẾU", description: "Thu thập và phân tích các giao dịch bất động sản tương đồng trên thị trường làm cơ sở so sánh", risk_level: "high" },
        { number: 4, title: "MÔ HÌNH ĐỊNH GIÁ", description: "Áp dụng các công cụ và mô hình định giá đã được văn phòng địa phương khuyến nghị và phê duyệt", risk_level: "high" },
        { number: 5, title: "PHƯƠNG PHÁP VÀ CĂN CỨ ĐỊNH GIÁ", description: "Trình bày rõ ràng phương pháp tiếp cận, công thức tính toán và lập luận định giá được áp dụng", risk_level: "high" },
        { number: 6, title: "THẨM ĐỊNH CHÉO VÀ PHÊ DUYỆT NỘI BỘ", description: "Đảm bảo báo cáo định giá (cả bản nháp và chính thức) được thẩm định chéo và phê duyệt bằng văn bản trước khi phát hành. Lưu trữ đầy đủ hồ sơ phê duyệt", risk_level: "high" },
        { number: 7, title: "ĐỊNH DẠNG BÁO CÁO CHUẨN", description: "Sử dụng mẫu báo cáo định giá theo định dạng chuẩn đã được phê duyệt tại văn phòng địa phương", risk_level: "medium" },
        { number: 8, title: "PHÁT HÀNH BẢN NHÁP", description: "Đảm bảo bản nháp được đánh dấu rõ ràng, chưa có chữ ký chính thức và đã qua thẩm định chéo, phê duyệt nội bộ trước khi gửi", risk_level: "high" },
        { number: 9, title: "ĐIỀU CHỈNH GIÁ TRỊ SAU BẢN NHÁP", description: "Ghi nhận và giải trình mọi thay đổi về giá trị định giá sau khi phát hành bản nháp hoặc báo cáo chính thức", risk_level: "high" },
        { number: 10, title: "KẾT QUẢ VÀ TÍNH TOÁN CUỐI CÙNG", description: "Lưu trữ đầy đủ các chi tiết tính toán, căn cứ và lập luận hỗ trợ cho kết quả định giá cuối cùng vào hồ sơ dự án", risk_level: "high" },
        { number: 11, title: "KÝ DUYỆT BÁO CÁO CHÍNH THỨC", description: "Ghi nhận đầy đủ quy trình phê duyệt và ký kết báo cáo định giá chính thức gửi khách hàng, lưu vào hồ sơ", risk_level: "high" },
        { number: 12, title: "CHỮ KÝ ĐIỆN TỬ", description: "Áp dụng chữ ký điện tử chỉ khi có đầy đủ phân quyền và lưu giữ hồ sơ phê duyệt người ký theo quy định", risk_level: "medium" },
        { number: 13, title: "BÁO CÁO CUỐI CÙNG ĐÃ KÝ", description: "Lưu trữ báo cáo định giá cuối cùng đã được ký duyệt đầy đủ trong hồ sơ dự án", risk_level: "medium" },
        { number: 14, title: "BÊN THỨ BA SỬ DỤNG BÁO CÁO", description: "Quản lý các trường hợp bên thứ ba chưa được liệt kê ban đầu yêu cầu quyền truy cập và sử dụng báo cáo định giá của JLL", risk_level: "medium" },
        { number: 15, title: "HÓA ĐƠN VÀ THANH TOÁN", description: "Hoàn tất việc xuất hóa đơn và thu phí dịch vụ định giá", risk_level: "low" }
    ]
};

// State management
let currentPhase = 'onboarding';
let currentFilter = 'all';
let searchTerm = '';

// Risk level labels
const riskLabels = {
    high: 'Cao',
    medium: 'Trung bình',
    low: 'Thấp'
};

// Initialize the dashboard
function init() {
    setupEventListeners();
    renderCards();
}

// Setup event listeners
function setupEventListeners() {
    // Tab switching
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const phase = btn.dataset.phase;
            switchPhase(phase);
        });
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        renderCards();
    });

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const risk = btn.dataset.risk;
            setFilter(risk);
        });
    });
}

// Switch between phases
function switchPhase(phase) {
    currentPhase = phase;
    
    // Update tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        if (btn.dataset.phase === phase) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    renderCards();
}

// Set risk filter
function setFilter(risk) {
    currentFilter = risk;
    
    // Update filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        if (btn.dataset.risk === risk) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    renderCards();
}

// Filter cards based on search and risk level
function filterCards(cards) {
    return cards.filter(card => {
        // Search filter
        const matchesSearch = searchTerm === '' || 
            card.title.toLowerCase().includes(searchTerm) || 
            card.description.toLowerCase().includes(searchTerm);
        
        // Risk level filter
        const matchesRisk = currentFilter === 'all' || card.risk_level === currentFilter;
        
        return matchesSearch && matchesRisk;
    });
}

// Create card HTML
function createCardHTML(card) {
    return `
        <div class="risk-card" data-card-id="${currentPhase}-${card.number}">
            <div class="card-header">
                <div class="card-number">${card.number}</div>
                <div class="card-title-wrapper">
                    <div class="card-title">${card.title}</div>
                    <div class="risk-badge ${card.risk_level}">
                        <span class="risk-dot risk-${card.risk_level}"></span>
                        ${riskLabels[card.risk_level]}
                    </div>
                </div>
            </div>
            <div class="card-description">
                ${card.description}
            </div>
        </div>
    `;
}

// Render cards
function renderCards() {
    const cardsGrid = document.getElementById('cardsGrid');
    const noResults = document.getElementById('noResults');
    const data = riskData[currentPhase];
    const filteredData = filterCards(data);
    
    if (filteredData.length === 0) {
        cardsGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }
    
    cardsGrid.style.display = 'grid';
    noResults.style.display = 'none';
    
    cardsGrid.innerHTML = filteredData.map(card => createCardHTML(card)).join('');
}

// Start the application
init();