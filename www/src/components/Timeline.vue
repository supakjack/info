<template>
  <div class="container">
    <h4 class="text-center mt-1 ml-1">รางวัล</h4>
    <div class="main-timeline">
      <!-- start experience section-->
      <div class="timeline">
        <div class="icon"></div>
        <div class="date-content">
          <div class="date-outer">
            <span class="date">
              <span class="month">25 กุมภาพันธ์</span>
              <span class="year">2564</span>
            </span>
          </div>
        </div>
        <div class="timeline-content">
          <h5 class="title">
            The 9th Asia Undergraduate Conference on Computing
          </h5>
          <h5 class="title">
            ประชุมวิชาการปริญญาตรีด้านคอมพิวเตอร์ภูมิภาคเอเชีย ครั้งที่ 9
          </h5>
          <p class="description">
            - รางวัล "EXCELLENT PAPER AWARDS" จากผลงานวิจัยภาคบรรยายเรื่อง
            “ระบบการจัดการสิทธิ์การใชงาน Joget”
          </p>
        </div>
      </div>
      <!-- end experience section-->

      <!-- start experience section-->
      <div class="timeline">
        <div class="icon"></div>
        <div class="date-content">
          <div class="date-outer">
            <span class="date">
              <span class="month">11 พฤศจิกายน</span>
              <span class="year">2559</span>
            </span>
          </div>
        </div>
        <div class="timeline-content">
          <h5 class="title">แข่งขันโครงงานคอมพิวเตอร์ประเภทซอฟต์แวร์</h5>
          <h5 class="title">งานศิลปหัตถกรรมนักเรียน ครั้งที่ 66</h5>
          <p class="description">
            - รางวัลเหรียญทองระดับจังหวัด (จ.ประจวบฯ)
          </p>
        </div>
      </div>
      <!-- end experience section-->

      <!-- start experience section-->
      <div class="timeline">
        <div class="icon"></div>
        <div class="date-content">
          <div class="date-outer">
            <span class="date">
              <span class="month">20 ธันวาคม</span>
              <span class="year">2558</span>
            </span>
          </div>
        </div>
        <div class="timeline-content">
          <h5 class="title">แข่งขันการเขียนโปรแกรมด้วยภาษาคอมพิวเตอร์</h5>
          <h5 class="title">งานศิลปหัตถกรรมนักเรียน ครั้งที่ 65</h5>
          <p class="description">
            - รางวัลเหรียญทองชนะเลิศระดับจังหวัด (จ.ประจวบฯ) <br />
            - รางวัลเหรียญทองแดงระดับภูมิภาค (ภาคกลางและภาคตะวันออก)
          </p>
        </div>
      </div>
      <!-- end experience section-->

      <!-- start experience section-->
      <div class="timeline">
        <div class="icon"></div>
        <div class="date-content">
          <div class="date-outer">
            <span class="date">
              <span class="month">15 กันยายน</span>
              <span class="year">2556</span>
            </span>
          </div>
        </div>
        <div class="timeline-content">
          <h5 class="title">โครงการ KMITL INNOVATIVE AWARD 2014</h5>
          <p class="description">
            - เข้าร่วมประกวดรอบ 10 ทีมสุดท้าย ณ ศูนย์การค้าเซ็นทรัลเวิลด์
          </p>
        </div>
      </div>
      <!-- end experience section-->
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="css" scoped>
.main-timeline {
  position: relative;
}

.main-timeline:before {
  content: '';
  display: block;
  width: 2px;
  height: 100%;
  background: #c6c6c6;
  margin: 0 auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.main-timeline .timeline {
  margin-bottom: 40px;
  position: relative;
}

.main-timeline .timeline:after {
  content: '';
  display: block;
  clear: both;
}

.main-timeline .icon {
  width: 18px;
  height: 18px;
  line-height: 18px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.main-timeline .icon:before,
.main-timeline .icon:after {
  content: '';
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transition: all 0.33s ease-out 0s;
}

.main-timeline .icon:before {
  background: #fff;
  border: 2px solid #232323;
  left: -3px;
}

.main-timeline .icon:after {
  border: 2px solid #c6c6c6;
  left: 3px;
}

.main-timeline .timeline:hover .icon:before {
  left: 3px;
}

.main-timeline .timeline:hover .icon:after {
  left: -3px;
}

.main-timeline .date-content {
  width: 50%;
  float: left;
  margin-top: 22px;
  position: relative;
}

.main-timeline .date-content:before {
  content: '';
  width: 36.5%;
  height: 2px;
  background: #c6c6c6;
  margin: auto 0;
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
}

.main-timeline .date-outer {
  width: 125px;
  height: 125px;
  font-size: 16px;
  text-align: center;
  margin: auto;
  z-index: 1;
}

.main-timeline .date-outer:before,
.main-timeline .date-outer:after {
  content: '';
  width: 125px;
  height: 125px;
  margin: 0 auto;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.33s ease-out 0s;
}

.main-timeline .date-outer:before {
  background: #fff;
  border: 2px solid #232323;
  left: -6px;
}

.main-timeline .date-outer:after {
  border: 2px solid #c6c6c6;
  left: 6px;
}

.main-timeline .timeline:hover .date-outer:before {
  left: 6px;
}

.main-timeline .timeline:hover .date-outer:after {
  left: -6px;
}

.main-timeline .date {
  width: 100%;
  margin: auto;
  position: absolute;
  top: 27%;
  left: 0;
}

.main-timeline .month {
  font-size: 18px;
  font-weight: 700;
}

.main-timeline .year {
  display: block;
  font-size: 30px;
  font-weight: 700;
  color: #232323;
  line-height: 36px;
}

.main-timeline .timeline-content {
  width: 50%;
  padding: 20px 0 20px 50px;
  float: right;
}

.main-timeline .title {
  font-size: 19px;
  font-weight: 700;
  line-height: 24px;
  margin: 0 0 15px 0;
}

.main-timeline .description {
  margin-bottom: 0;
}

.main-timeline .timeline:nth-child(2n) .date-content {
  float: right;
}

.main-timeline .timeline:nth-child(2n) .date-content:before {
  left: 10px;
}

.main-timeline .timeline:nth-child(2n) .timeline-content {
  padding: 20px 50px 20px 0;
  text-align: right;
}

@media only screen and (max-width: 991px) {
  .main-timeline .date-content {
    margin-top: 35px;
  }
  .main-timeline .date-content:before {
    width: 22.5%;
  }
  .main-timeline .timeline-content {
    padding: 10px 0 10px 30px;
  }
  .main-timeline .title {
    font-size: 17px;
  }
  .main-timeline .timeline:nth-child(2n) .timeline-content {
    padding: 10px 30px 10px 0;
  }
}

@media only screen and (max-width: 767px) {
  .main-timeline:before {
    margin: 0;
    left: 7px;
  }
  .main-timeline .timeline {
    margin-bottom: 20px;
  }
  .main-timeline .timeline:last-child {
    margin-bottom: 0;
  }
  .main-timeline .icon {
    margin: auto 0;
  }
  .main-timeline .date-content {
    width: 95%;
    float: right;
    margin-top: 0;
  }
  .main-timeline .date-content:before {
    display: none;
  }
  .main-timeline .date-outer {
    width: 110px;
    height: 110px;
  }
  .main-timeline .date-outer:before,
  .main-timeline .date-outer:after {
    width: 110px;
    height: 110px;
  }
  .main-timeline .date {
    top: 30%;
  }
  .main-timeline .year {
    font-size: 24px;
  }
  .main-timeline .timeline-content,
  .main-timeline .timeline:nth-child(2n) .timeline-content {
    width: 95%;
    text-align: center;
    padding: 10px 0;
  }
  .main-timeline .title {
    margin-bottom: 10px;
  }
}
</style>
