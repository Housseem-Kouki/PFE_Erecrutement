<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\EntretienRepository;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass=EntretienRepository::class)
 * @ApiResource(formats={"json"})
 */
class Entretien
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     */
    private $dateentretien;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $commentaire;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $etat;

    /**
     * @ORM\ManyToOne(targetEntity=Agent::class, inversedBy="entretiens")
     * @ORM\JoinColumn(nullable=false,onDelete="CASCADE")
     */
    private $agent;

    /**
     * @ORM\ManyToOne(targetEntity=Candidature::class, inversedBy="entretiens")
     * @ORM\JoinColumn(nullable=false,onDelete="CASCADE")
     */
    private $candidature;

    /**
     * @ORM\Column(type="integer")
     *  @ORM\JoinColumn(name="agent_id", referencedColumnName="id")
     */
    private $agent_id;

    /**
     * @ORM\Column(type="integer")
     *  @ORM\JoinColumn(name="candidature_id", referencedColumnName="id")
     */
    private $candidature_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateentretien(): ?\DateTimeInterface
    {
        return $this->dateentretien;
    }

    public function setDateentretien(\DateTimeInterface $dateentretien): self
    {
        $this->dateentretien = $dateentretien;

        return $this;
    }

    public function getCommentaire(): ?string
    {
        return $this->commentaire;
    }

    public function setCommentaire(string $commentaire): self
    {
        $this->commentaire = $commentaire;

        return $this;
    }

    public function getEtat(): ?string
    {
        return $this->etat;
    }

    public function setEtat(string $etat): self
    {
        $this->etat = $etat;

        return $this;
    }

    public function getAgent(): ?Agent
    {
        return $this->agent;
    }

    public function setAgent(?Agent $agent): self
    {
        $this->agent = $agent;

        return $this;
    }

    public function getCandidature(): ?Candidature
    {
        return $this->candidature;
    }

    public function setCandidature(?Candidature $candidature): self
    {
        $this->candidature = $candidature;

        return $this;
    }

    public function getAgentId(): ?int
    {
        return $this->agent_id;
    }

    public function setAgentId(int $agent_id): self
    {
        $this->agent_id = $agent_id;

        return $this;
    }

    public function getCandidatureId(): ?int
    {
        return $this->candidature_id;
    }

    public function setCandidatureId(int $candidature_id): self
    {
        $this->candidature_id = $candidature_id;

        return $this;
    }
}
