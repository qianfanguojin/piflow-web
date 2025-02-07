package cn.cnic.third.livy.service.impl;

import cn.cnic.base.utils.HttpUtils;
import cn.cnic.base.utils.ReturnMapUtils;
import cn.cnic.common.constant.SysParamsCache;
import cn.cnic.third.livy.service.ILivy;
import lombok.extern.slf4j.Slf4j;
import net.sf.json.JSONObject;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@Component
public class LivyImpl implements ILivy {

    @Override
    public Map<String, Object> getAllSessions() {
        String doGet = HttpUtils.doGet(SysParamsCache.getLivySessionsUrl(), null, null);
        log.info("return msg: " + doGet);
        return ReturnMapUtils.setSucceededCustomParam("data", doGet);
    }

    @Override
    public Map<String, Object> startSessions() {
        String doPost = HttpUtils.doPost(SysParamsCache.getLivySessionsUrl(), "{\"kind\":\"spark\"}", null);
        log.info("return msg: " + doPost);
        if(StringUtils.isBlank(doPost)) {
        	return ReturnMapUtils.setFailedMsg("Error : Interface return value is null");
        }
        if (doPost.startsWith(HttpUtils.INTERFACE_CALL_ERROR)) {
        	return ReturnMapUtils.setFailedMsg(doPost);
        }
        try {
            JSONObject obj = JSONObject.fromObject(doPost);// Convert a json string to a json object
            String sessionsId = obj.getString("id");
            if(StringUtils.isBlank(sessionsId)){
                return ReturnMapUtils.setFailedMsg("Error : Interface return value is null");
            }
            return ReturnMapUtils.setSucceededCustomParam("sessionsId", sessionsId);
        } catch (Exception e) {
            log.error("error: ", e);
            return ReturnMapUtils.setFailedMsg("Error : Interface call succeeded, conversion error");
        }
    }

    @Override
    public Map<String, Object> stopSessions(String sessionsId) {
        String url = SysParamsCache.getLivySessionsUrl() + "/" + sessionsId;
        String doDelete = HttpUtils.doDelete(url, null);
        log.info("return msg: " + doDelete);
        if(StringUtils.isBlank(doDelete)) {
        	return ReturnMapUtils.setFailedMsg("Error : Interface return value is null");
        }
        if (doDelete.startsWith(HttpUtils.INTERFACE_CALL_ERROR)) {
            return ReturnMapUtils.setFailedMsg(doDelete);
        }
        return ReturnMapUtils.setSucceededCustomParam("data", doDelete);
    }

    @Override
    public Map<String, Object> runStatements(String sessionsId, String code) {
    	Map<String, Object> jsonMap = new HashMap<>();
    	jsonMap.put("kind", "spark");
    	jsonMap.put("code", code);
    	String json = ReturnMapUtils.mapToJson(jsonMap);
        String url = SysParamsCache.getLivySessionsUrl() + "/" + sessionsId + "/statements";
        String doPost = HttpUtils.doPost(url, json, null);
        log.info("return msg: " + doPost);
        if(StringUtils.isBlank(doPost)) {
        	return ReturnMapUtils.setFailedMsg("Error : Interface return value is null");
        }
        if (doPost.startsWith(HttpUtils.INTERFACE_CALL_ERROR)) {
        	return ReturnMapUtils.setFailedMsg(doPost);
        }
        try {
            JSONObject obj = JSONObject.fromObject(doPost);// Convert a json string to a json object
            String statementsId = obj.getString("id");
            if(StringUtils.isBlank(statementsId)){
                return ReturnMapUtils.setFailedMsg("Error : Interface return value is null");
            }
            return ReturnMapUtils.setSucceededCustomParam("statementsId", statementsId);
        } catch (Exception e) {
            log.error("error: ", e);
            return ReturnMapUtils.setFailedMsg("Error : Interface call succeeded, conversion error");
        }
    }

    @Override
    public Map<String, Object> getStatementsResult(String sessionsId, String statementsId) {
        String url = SysParamsCache.getLivySessionsUrl() + "/" + sessionsId + "/statements/" + statementsId;
        String doGet = HttpUtils.doGet(url, null, null);
        log.info("return msg: " + doGet);
        if(StringUtils.isBlank(doGet)) {
        	return ReturnMapUtils.setFailedMsg("Error : Interface return value is null");
        }
        if (doGet.startsWith(HttpUtils.INTERFACE_CALL_ERROR)) {
        	return ReturnMapUtils.setFailedMsg(doGet);
        }
        return ReturnMapUtils.setSucceededCustomParam("data", doGet);
    }
    
}
