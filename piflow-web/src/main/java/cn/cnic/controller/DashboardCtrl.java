package cn.cnic.controller;

import cn.cnic.base.util.ReturnMapUtils;
import cn.cnic.base.util.SessionUserUtil;
import cn.cnic.component.dashboard.service.IResourceService;
import cn.cnic.component.dashboard.service.IStatisticService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.Map;

@RestController
@RequestMapping("/dashboard")
public class DashboardCtrl {

    @Resource
    private IResourceService resourceServiceImpl;

    @Resource
    private IStatisticService statisticServiceImpl;

    /**
     * resource info,include cpu,memory,disk
     *
     * @return
     */
    @RequestMapping("/resource")
    @ResponseBody
    public String getResourceInfo() {
        String username = SessionUserUtil.getCurrentUsername();
        String resourceInfo = resourceServiceImpl.getResourceInfo();
        return ReturnMapUtils.setSucceededCustomParamRtnJsonStr("resourceInfo", resourceInfo);
    }

    /**
     * static
     *
     * @return
     */
    @RequestMapping("/flowStatistic")
    @ResponseBody
    public String getFlowStatisticInfo() {
        String username = SessionUserUtil.getCurrentUsername();
        Map<String, String> flowResourceInfo = statisticServiceImpl.getFlowStatisticInfo();
        return ReturnMapUtils.setSucceededCustomParamRtnJsonStr("flowResourceInfo", flowResourceInfo);
    }

    @RequestMapping("/groupStatistic")
    @ResponseBody
    public String getGroupStatisticInfo() {
        String username = SessionUserUtil.getCurrentUsername();
        Map<String, String> groupResourceInfo = statisticServiceImpl.getGroupStatisticInfo();
        return ReturnMapUtils.setSucceededCustomParamRtnJsonStr("groupResourceInfo", groupResourceInfo);
    }

    @RequestMapping("/scheduleStatistic")
    @ResponseBody
    public String getScheduleStatisticInfo() {
        String username = SessionUserUtil.getCurrentUsername();
        Map<String, String> scheduleResourceInfo = statisticServiceImpl.getScheduleStatisticInfo();
        return ReturnMapUtils.setSucceededCustomParamRtnJsonStr("scheduleResourceInfo", scheduleResourceInfo);
    }

    @RequestMapping("/templateAndDataSourceStatistic")
    @ResponseBody
    public String getTemplateAndDataSourceStatisticInfo() {
        String username = SessionUserUtil.getCurrentUsername();
        Map<String, String> tempalateAndDataSourceResourceInfo = statisticServiceImpl.getTemplateAndDataSourceStatisticInfo();
        return ReturnMapUtils.setSucceededCustomParamRtnJsonStr("tempalateAndDataSourceResourceInfo", tempalateAndDataSourceResourceInfo);
    }

    @RequestMapping("/stopStatistic")
    @ResponseBody
    public String getStopStatisticInfo() {
        String username = SessionUserUtil.getCurrentUsername();
        Map<String, String> stopResourceInfo = statisticServiceImpl.getStopStatisticInfo();
        return ReturnMapUtils.setSucceededCustomParamRtnJsonStr("stopResourceInfo", stopResourceInfo);
    }
}
