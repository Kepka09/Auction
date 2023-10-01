package com.example.auction.services;

import com.example.auction.models.Lots;
import com.example.auction.repo.LotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class LotsService {
    private final LotRepository lotRepository;

    @Autowired
    public LotsService(LotRepository lotRepository){
        this.lotRepository = lotRepository;
    }

    public Lots findById (Long id){
        return lotRepository.findById(id).orElse(null);
    }

    public Lots createLots (Lots lots){
        return lotRepository.save(lots);
    }

    public void deleteByID (Long id){
        lotRepository.deleteById(id);
    }
}
